import { createContext, useState } from "react";

export const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);

  return (
    <QuizContext.Provider
      value={{
        name,
        setName,
        score,
        setScore,
        questionIdx,
        setQuestionIdx,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
