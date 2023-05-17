import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import Container from "./styles";
import { IBotMessage } from "../../types/types";
import formatPhone from "../../utils/formatPhone";

interface IInputProps {
  onUserAnswer: (response: string) => void;
  questionId: number;
  isQuestionDisabled: boolean;
  currentQuestion: IBotMessage[];
}

const Input: React.FC<IInputProps> = ({
  onUserAnswer,
  questionId,
  isQuestionDisabled,
  currentQuestion,
}) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(value.trim() === "");
  }, [value]);

  const cleanNumericInput = (phoneInput: string) => {
    return phoneInput.replace(/[^0-9]/g, "");
  };

  const cleanNameInput = (nameInput: string) => {
    return nameInput.replace(/[^A-Za-z\s]/g, "");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isQuestionDisabled) {
      return; // Disable input when in a question state
    }

    const inputValue = event.target.value;
    const currentQuestionType = currentQuestion[questionId - 1]?.type;
    let cleanedValue = inputValue;

    switch (currentQuestionType) {
      case "number":
        cleanedValue = cleanNumericInput(inputValue);
        break;
      case "name":
        cleanedValue = cleanNameInput(inputValue);
        break;
      case "phone":
        cleanedValue = formatPhone(inputValue);
        cleanedValue = cleanedValue.slice(0, 15);
        break;
      default:
        break;
    }

    setValue(cleanedValue);
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
          type={currentQuestion[questionId].type === "phone" ? "tel" : "text"} // Set input type to "tel" for questionId  (phone)
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
