import D from "./d";
import { useContext } from "react";
import { nameContext } from "./a";
const C = () => {
  const uName = useContext(nameContext);
  console.log(uName);
  return (
    <div>
      this is C :{uName}
      <D />
    </div>
  );
};
export default C;
