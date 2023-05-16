import React, { useState } from "react";
import { IUserResponse } from "../../types/types";
import { useChatContext } from "../../context/ChatContext";

const Input: React.FC = () => {
  const { addResponse, currentQuestion } = useChatContext();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userResponse: IUserResponse = {
      questionId: currentQuestion?.id || 0,
      answer: inputValue,
    };
    addResponse(userResponse);
    setInputValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
