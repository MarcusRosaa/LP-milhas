import React from "react";
import { IQuestion, IUserResponse } from "../../types/types";
import { useChatContext } from "../../context/ChatContext";

interface IBotQuestionProps {
  question: IQuestion;
  onUserAnswer: (response: IUserResponse) => void;
}

const BotQuestion: React.FC<IBotQuestionProps> = ({
  question,
  onUserAnswer,
}) => {
  const { addResponse } = useChatContext();

  const handleUserAnswer = (response?: string) => {
    const userResponse: IUserResponse = {
      questionId: question.id,
      answer: response,
    };
    addResponse(userResponse);
    onUserAnswer(userResponse);
  };

  const handleOptionClick = (option?: string) => {
    handleUserAnswer(option);
  };

  const handleOptionKeyPress = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    option?: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleUserAnswer(option);
    }
  };

  return (
    <div>
      <p>{question.text}</p>
      {question.type === "options" && (
        <ul>
          {question.options?.map((option) => (
            <li key={question.id}>
              <button
                type="button"
                onClick={() => handleOptionClick(option)}
                onKeyPress={(e) => handleOptionKeyPress(e, option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}

      {question.type === "button" && (
        <button
          type="button"
          onClick={() => handleOptionClick(question.buttonText)}
          onKeyPress={(e) => handleOptionKeyPress(e, question.buttonText)}
        >
          {question.buttonText}
        </button>
      )}
    </div>
  );
};

export default BotQuestion;
