import React from "react";
import { useState } from "react";

const KeyordClipBoard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert("Enter key pressed");
  };

  const handleAreaPaste = (e) => {
    e.target.value = e.clipboardData.getData("text").toLowerCase();
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <h2>Clipbord Events</h2>
      <input
        type="text"
        value={inputValue}
        onKeyUp={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{inputValue.toUpperCase()}</p>

      <textarea
        name="area"
        id="area"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyordClipBoard;
