// ...

import { useState } from "react";
import { IUserResponse } from "../../types/types";
import Container from "./styles";

interface IUserAnswerProps {
  onUserAnswer: (response: IUserResponse) => void;
}

const UserAnswer: React.FC<IUserAnswerProps> = ({ onUserAnswer }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const response: IUserResponse = {
      questionId: -1, // Set a specific ID or use a different mechanism to identify user input
      answer: inputValue,
    };

    onUserAnswer(response);
    setInputValue("");
  };

  return (
    <Container>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick} type="button">
        Submit
      </button>
    </Container>
  );
};

export default UserAnswer;
