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
    null
  );

  const handleUserAnswer = () => {
    if (selectedOption !== null) {
      onUserAnswer(selectedOption);
      setSelectedOption(null);
    } else if (currentMessage?.type === "button") {
      onUserAnswer(currentMessage.buttonText || "");
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onUserAnswer(option);
  };

  const renderOptions = () => {
    return (
      <div className="options-container">
        {currentMessage?.options?.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (isWaiting) {
      setCurrentMessage(nextQuestion);
      setSelectedOption(null);
    }
  }, [isWaiting, nextQuestion]);

  useEffect(() => {
    setCurrentMessage(message);
    setSelectedOption(null);
  }, [message]);

  const renderMessageContent = () => {
    if (currentMessage === null) {
      return null;
    }

    const displayText =
      currentMessage.type === "options" && selectedOption
        ? currentMessage.text.replace("{option}", selectedOption)
        : currentMessage.text;

    switch (currentMessage?.type) {
      case "auto":
        return (
          <Container className="message-content--auto">
            <p>{displayText}</p>
          </Container>
        );
      case "button":
        return (
          <Container className="message-content--button">
            <p>{displayText}</p>
            <button
              onClick={handleUserAnswer}
              disabled={!isWaiting}
              type="button"
            >
              {currentMessage.buttonText}
            </button>
          </Container>
        );
      case "options":
        return (
          <Container className="message-content--options">
            <p>{displayText}</p>
            {renderOptions()}
          </Container>
        );
      default:
        return (
          <Container className="message-content--default">
            <p>{displayText}</p>
          </Container>
        );
    }
  };

  return <div className="bot-message">{renderMessageContent()}</div>;
};

export default BotMessage;
