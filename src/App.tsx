import Button from "./components/button";

function App() {
  return (
    <div className="w-screen flex align-center justify-center flex-col">
      <h1 className="text-center font-bold">Landing Page</h1>

      <p className="text-center mt-9 mb-20 text-xl">
        The purpose of the pop-up is the coc
        <br />
        Please review and sign
      </p>

      <div className="mx-auto flex align-center">
        <Button
          onClick={() =>
            window.open(
              "https://lfshare.sharepoint.com/sites/CodeOfConduct2/SitePages/Code-Of-Conduct.aspx?env=WebView"
            )
          }
          variant="primary"
          className="mr-12"
        >
          Review
        </Button>
        <Button onClick={() => window.close()}>Close</Button>
      </div>
    </div>
  );
}

export default App;
