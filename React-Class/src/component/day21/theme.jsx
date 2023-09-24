import { createContext } from "react";

const ThemeContext = createContext(null);
const ThemeProvider = ThemeContext.Provider;

export { ThemeContext, ThemeProvider };
