import { useContext } from "react";
import { themeContext } from "./HomePage";

const ChildpageV2 = () => {
  const { theme, onThemeChange } = useContext(themeContext);

  return (
    <div>
      <p>V2: {theme}</p>
    </div>
  );
};

export default ChildpageV2;
