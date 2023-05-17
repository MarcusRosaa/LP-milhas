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

    if (currentMessage?.type === "button") {
      onUserAnswer(currentMessage.buttonText || "");
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

  useEffect(() => {
    setCurrentMessage(message);
  }, [message]);

  useEffect(() => {
    if (isWaiting) {
      setCurrentMessage(nextQuestion);
    }
  }, [isWaiting, nextQuestion]);

  const renderMessageContent = () => {
    if (currentMessage === null) {
      return null;
    }
    switch (currentMessage?.type) {
      case "auto":
        return (
          <Container className="message-content--auto">
            <p>{currentMessage.text}</p>
          </Container>
        );
      case "button":
        return (
          <Container className="message-content--button">
            <p>{currentMessage.text}</p>
            <button
              onClick={handleUserAnswer}
              disabled={isWaiting}
              type="button"
            >
              {currentMessage.buttonText}
            </button>
          </Container>
        );
      case "options":
        return (
          <Container className="message-content--options">
            <p>{currentMessage.text}</p>
            {renderOptions()}
          </Container>
        );
      default:
        return (
          <Container className="message-content--default">
            <p>{currentMessage.text}</p>
          </Container>
        );
    }
  };

  return (
    <div className="bot-message">
      {renderMessageContent()}
      {isWaiting && !currentMessage?.options && (
        <Container className="waiting-message">
          Waiting for your response...
        </Container>
      )}
    </div>
  );
};

export default BotMessage;
