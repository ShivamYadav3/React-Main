import { useState } from "react";
import { ThemeProvider } from "./context/themeContext";

const FirstComp = () => {
  const [theme, setTheme] = useState("light");

  const themeChanger = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeProvider value={theme}>
        <div>this is first comp</div>
        <div>
          <button onClick={themeChanger}>Change Theme</button>
        </div>
        <div>{theme}</div>
      </ThemeProvider>
    </>
  );
};
export default FirstComp;
