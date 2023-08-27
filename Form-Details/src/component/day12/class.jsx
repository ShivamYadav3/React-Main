import { useState } from "react";
import ChildWithIssue from "./2.child-issue";
import ComponentClass from "./4-ComponentClass";
import PureComponentClass from "./5-PureComponent";

const ParentView = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  console.log("Re-render ParentView");

  return (
    <>
      <p>
        Counter: {counter} {counter2}
      </p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>

      <button onClick={() => setCounter2((prevState) => prevState + 1)}>
        Increment 2
      </button>

      {/* <ChildWithIssue count={counter} />
      <ChildWithIssue />
      <ChildWithIssue /> */}

      <ComponentClass />
      <PureComponentClass count={counter} />
    </>
  );
};



import { Component } from "react";

class ComponentClass extends Component {
  render() {
    console.log("ComponentClass  re-render");
    return <p>Welcome to Class Comp</p>;
  }
}

export default ComponentClass;


import { PureComponent } from "react";

class PureComponentClass extends PureComponent {
  render() {
    console.log("Pure component re-render");
    return <p>Welcome to PureComponent Comp</p>;
  }
}

export default PureComponentClass;


export default ParentView;