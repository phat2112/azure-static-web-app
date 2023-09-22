import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classnames: ClassValue[]) {
  return twMerge(clsx(classnames));
}
