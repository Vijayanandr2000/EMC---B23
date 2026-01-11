import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";

// const question = {
//   text: "What is 2 + 2",
//   options: [1, 2, 3, 4],
//   ans: 3,
// };

const questions = [
  {
    text: "What is 2 + 2",
    options: [1, 2, 3, 4],
    ans: 3,
  },
  {
    text: "Your Mentor is",
    options: ["vijay", "kishore", "ajay"],
    ans: 0,
  },
  {
    text: "is class understand",
    options: ["yes", "no"],
    ans: 0,
  },
];

const Quiz = () => {
  const { setScore, questionIdx, setQuestionIdx } = useContext(QuizContext);
  const navigator = useNavigate();

  const question = questions[questionIdx];

  const [timer, setTimer] = useState(60 * 1);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000 * 1);

    if (timer === 0) {
      clearInterval(timeInterval);
      navigator("/result");
    }

    return () => clearInterval(timeInterval);
  }, [timer]);

  const handleAnswer = (idx) => {
    const isCrct = question.ans == idx;
    if (isCrct) {
      setScore((prev) => {
        return prev + 1;
      });
    }

    setQuestionIdx((prev) => prev + 1);

    if (questions.length - 1 == questionIdx) navigator("/result");
  };

  return (
    <div>
      <h1>
        Quiz Page - Timer {"=>"} {timer}
      </h1>
      <hr
        style={{
          marginBottom: "10px",
        }}
      />

      <h2>{question.text}</h2>

      <hr
        style={{
          marginBottom: "10px",
        }}
      />

      {/* <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button> */}
      {question.options.map((option, idx) => {
        return <button onClick={() => handleAnswer(idx)}>{option}</button>;
      })}
    </div>
  );
};

export default Quiz;
