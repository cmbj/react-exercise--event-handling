import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingName, setHeadingName] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setHeadingName(name);
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="container">
      <h1>Hello {headingName}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseLeave}
        style={{ backgroundColor: isMouseOver ? "lightgrey" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
