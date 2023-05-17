import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import Container from "./styles";

interface IInputProps {
  onUserAnswer: (response: string) => void;
  questionId: number;
}

const Input: React.FC<IInputProps> = ({ onUserAnswer, questionId }) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(value.trim() === "");
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isEmpty) {
      onUserAnswer(value);
      setValue("");
    }
  };

  return (
    <Container>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter your answer..."
        />
        <button type="submit" disabled={isEmpty}>
          <MdSend />
        </button>
      </form>
    </Container>
  );
};

export default Input;
