import React, { useState, useEffect } from "react";
import { IBotMessage } from "../../types/types";
import Container from "./styles";

interface IBotMessageProps {
  message: IBotMessage | null;
  nextQuestion: IBotMessage;
  onUserAnswer: (response: string) => void;
  isWaiting: boolean;
}

const BotMessage: React.FC<IBotMessageProps> = ({
  message,
  nextQuestion,
  onUserAnswer,
  isWaiting,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState<IBotMessage | null>(
    message
  );

  const handleUserAnswer = () => {
    if (selectedOption !== null) {
      onUserAnswer(selectedOption);
      setSelectedOption(null);
    }

    if (message?.type === "button") {
      onUserAnswer("");
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    handleUserAnswer();
  };

  const renderOptions = () => {
    return (
      <div className="options-container">
        {currentMessage?.options?.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={isWaiting || selectedOption === option}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    setCurrentMessage(message);
  }, [message]);

  const renderMessageContent = () => {
    if (currentMessage === null) {
      return null;
    }

    switch (currentMessage?.type) {
      case "auto":
        return (
          <Container className="message-content">
            <p>{currentMessage.text}</p>
          </Container>
        );
      case "button":
        return (
          <Container className="message-content">
            <p>{currentMessage.text}</p>
            <button onClick={handleUserAnswer} type="button">
              {currentMessage.buttonText}
            </button>
          </Container>
        );
      case "options":
        return (
          <Container className="message-content">
            <p>{currentMessage.text}</p>
            {renderOptions()}
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bot-message">
      {renderMessageContent()}
      {isWaiting && (
        <Container className="waiting-message">
          Waiting for your response...
        </Container>
      )}
    </div>
  );
};

export default BotMessage;
