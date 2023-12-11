import React, { useEffect, useState } from "react";

const Event = () => {
  const [isSpaceBarPressed, setSpaceBarPressed] = useState(false);

  useEffect(() => {
    const spaceKey = (e) => {
      if (!isSpaceBarPressed && e.keyCode === 32) {
        setSpaceBarPressed(true);
      }
    };

    const spaceKeyDown = (e) => {
      if (isSpaceBarPressed && e.keyCode === 32) {
        setSpaceBarPressed(false);
      }
    };

    document.addEventListener("keydown", spaceKey);
    document.addEventListener("keyup", spaceKeyDown);

    return () => {
      document.removeEventListener("keydown", spaceKey);
      document.removeEventListener("keyup", spaceKeyDown);
    };
  }, [isSpaceBarPressed]);

  return (
    <div>
      <div>event</div>
      {isSpaceBarPressed ? <div>space bAr is pressed</div> : ""}
    </div>
  );
};

export default Event;
