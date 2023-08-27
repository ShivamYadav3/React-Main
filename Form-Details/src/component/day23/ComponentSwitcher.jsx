import { useState } from "react";

const A = () => <p>Welcome to A</p>;
const B = () => <p>Welcome to B</p>;
const C = () => <p>Welcome to C</p>;
const D = () => <p>Welcome to D</p>;

const ComponentSwitcher = () => {
  const [current, setCurrent] = useState(0);

  const changeComponent = (num) => {
    setCurrent((prevState) => prevState + num);
  };

  const renderComponent = () => {
    if (current === 0) return <A />;
    if (current === 1) return <B />;
    if (current === 2) return <C />;
    if (current === 3) return <D />;
    return null;
  };

  return (
    <>
      <button onClick={() => changeComponent(-1)}>Previous</button>
      <button onClick={() => changeComponent(1)}>Next</button>

      {renderComponent()}
    </>
  );
};

export default ComponentSwitcher;
