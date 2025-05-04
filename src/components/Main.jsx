import React, { useState } from "react";

import "../styles/Main.css";

const Main = () => {
  const [targetValue, setTargetValue] = useState("");

  const handleClick = (e) => {
    const newValue = e.target;
    if (targetValue === "") {
      setTargetValue(newValue);
    } else {
      setTargetValue(targetValue + "\r\n" + newValue);
    }
  };

  return (
    <main>
      <h1>This is a main</h1>
      <div className="container">
        <button className="button" onClick={handleClick}>
          Нажми меня
        </button>
        <textarea className="text_1" value={targetValue} readOnly></textarea>
      </div>
    </main>
  );
};

export default Main;
