import { createContext, useState } from "react";
import Childpage from "./Childpage";
import ChildpageV2 from "./ChildpageV2";

export const themeContext = createContext(null);
const ThemeProvider = themeContext.Provider;

const Homepage = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeProvider value={{ theme, onThemeChange }}>
      <button onClick={onThemeChange}>Change Theme</button>
      <Childpage />
      <ChildpageV2 />
    </ThemeProvider>
  );
};

export default Homepage;
