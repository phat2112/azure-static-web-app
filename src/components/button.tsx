import { ButtonHTMLAttributes, forwardRef } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonProps = cva(
  "w-fit h-fit p-4 border rounded-lg transition-colors duration-200 ease-linear",
  {
    variants: {
      variant: {
        default:
          "border-black hover:border-white bg-white text-black hover:text-white hover:bg-black ",
        primary:
          "border-blue-500 hover:border-white text-blue-500 hover:text-white bg-white hover:bg-blue-500",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);
type ButtonVariants = VariantProps<typeof buttonProps>;

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  children: React.ReactNode;
}

const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonProps({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
