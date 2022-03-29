import React from "react";
import "../styles/App.css";
const App = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button id is:-button-a");
  };
  const handleClickAgain = (event) => {
    event.preventDefault();
    console.log("Button id is:-button-b");
  };

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onClick={handleClick} id="button-a">
        Button A
      </button>
      <button onClick={handleClickAgain} id="button-b">
        Button B
      </button>
    </div>
  );
};

export default App;
