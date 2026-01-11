import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

const Result = () => {
  const { name, score } = useContext(QuizContext);

  return (
    <div>
      <h1>Result</h1>
      <h3>Hi {name}</h3>

      <h2>Your Score is {score}</h2>
    </div>
  );
};

export default Result;
