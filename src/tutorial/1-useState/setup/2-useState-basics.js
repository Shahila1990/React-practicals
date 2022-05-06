import React, { useState } from "react";

const UseStateBasics = () => {
  /* console.log(useState('hello'));
  const value = useState(10)[0]
  const handler = useState(10)[1]
  console.log(value,handler); */
  const [text, setText] = useState("random Title");
  const btnClick = () => {
    if (text === "random Title") {
      setText("hello World");
    }
    else{
      setText('random Title')
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={btnClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
