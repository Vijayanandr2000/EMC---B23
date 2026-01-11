import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { name, setName } = useContext(QuizContext);
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);

    navigator("/instruction");
  };

  return (
    <div>
      <h1>Welcome to Quiz App</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="user-info">
          <input
            required
            type="text"
            placeholder="Enter your Name...!"
            onChange={(e) => {
              const userVal = e.target.value;
              setName(userVal);
            }}
          />
        </div>

        <br />
        <div className="user-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
