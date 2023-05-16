import React, { useState } from "react";

interface IInputProps {
  onUserAnswer: (response: string) => void;
  questionId: number;
}

const Input: React.FC<IInputProps> = ({ onUserAnswer, questionId }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onUserAnswer(value);
    setValue("");
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter your answer..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
