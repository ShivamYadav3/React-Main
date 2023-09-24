import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import About from "./about";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const Main = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeProvider value={theme}>
        <div>
          <button onClick={toggleTheme}>Change Theme</button>: {theme}
        </div>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default Main;
