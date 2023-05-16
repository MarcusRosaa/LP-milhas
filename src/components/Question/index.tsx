// ...

import { useState } from "react";
import { IQuestion, IUserResponse } from "../../types/types";
import Container from "./styles";

const BotQuestion: React.FC<IQuestion> = ({
  id,
  text,
  type,
  options,
  multiplier,
  buttonText,
  onUserAnswer,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const response: IUserResponse = {
      questionId: id,
      answer: inputValue,
    };

    onUserAnswer(response);
    setInputValue("");
  };

  return (
    <Container>
      <div>{text}</div>
      {type === "number" ? (
        <input type="number" value={inputValue} onChange={handleInputChange} />
      ) : (
        type === "options" && (
          <select value={inputValue} onChange={handleInputChange}>
            <option value="">Select an option</option>
            {options?.map((option) => (
              <option key={Math.random()} value={option}>
                {option}
              </option>
            ))}
          </select>
        )
      )}
      {buttonText && (
        <button onClick={handleButtonClick} type="button">
          {buttonText}
        </button>
      )}
    </Container>
  );
};

export default BotQuestion;
