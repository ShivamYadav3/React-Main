import { createContext, useState } from "react";
import B from "./b";

export const nameContext = createContext(null);
const NameProvider = nameContext.Provider;

const AComp = () => {
  const [uname, setUname] = useState("");
  return (
    <>
      <NameProvider value={uname}>
        <input
          type="text"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <div>This is A</div>
        <B />
      </NameProvider>
    </>
  );
};
export default AComp;
