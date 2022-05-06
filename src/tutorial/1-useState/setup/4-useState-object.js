import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Shahila",
    age: 32,
    message: "Hi, there",
  });

  const changeMessage = () => {
    setPeople({...people,message:'How are you doing?'})
  };

  return (
    <>
      <h2>{people.name}</h2>
      <h2>{people.age}</h2>
      <h2>{people.message}</h2>
      <button className="btn" onClick={changeMessage}>
        Change the message
      </button>
    </>
  );
};



/* We can use useState for each property (single state value), then it's no longer an object. It will be treated as an array. */
/* const [name, setName] = useState('peter')
const [age, setAge] = useState(24)
const [message, setMessage] =useState('hello')

const changeMessage = () => {
  setMessage("How are you doing?");
};

return (
  <>
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{message}</h2>
    <button className="btn" onClick={changeMessage}>
      Change the message
    </button>
  </>
);
} */

export default UseStateObject;
