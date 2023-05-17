import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import Container from "./styles";

interface IInputProps {
  onUserAnswer: (response: string) => void;
  questionId: number;
  isQuestionDisabled: boolean;
}

const Input: React.FC<IInputProps> = ({
  onUserAnswer,
  questionId,
  isQuestionDisabled,
}) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(value.trim() === "");
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isQuestionDisabled) {
      return; // Disable input when in a question state
    }
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isEmpty && !isQuestionDisabled) {
      onUserAnswer(value);
      setValue("");
    }
  };

  return (
    <Container>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type={questionId === 2 ? "tel" : "text"} // Set input type to "tel" for questionId 2 (phone)
          value={value}
          onChange={handleChange}
          placeholder="Enter your answer..."
          disabled={isQuestionDisabled} // Disable input when in a question state
        />
        <button type="submit" disabled={isEmpty || isQuestionDisabled}>
          <MdSend />
        </button>
      </form>
    </Container>
  );
};

export default Input;
