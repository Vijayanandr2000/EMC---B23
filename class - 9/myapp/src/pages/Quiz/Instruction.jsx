import React from "react";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigator = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigator("/quiz");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quiz Instructions</h1>

      <ul>
        <li>Read each question carefully.</li>
        <li>Select only one correct answer.</li>
        <li>You cannot change your answer after submitting.</li>
        <li>Each question has a time limit.</li>
        <li>Your score will be shown at the end.</li>
      </ul>

      <button
        onClick={handleClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Instruction;
