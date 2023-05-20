/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from "react";
import { TbRobot } from "react-icons/tb";
import { IBotMessage } from "../../types/types";
import Container from "./styles";

interface IBotMessageProps {
  message: IBotMessage | null;
  nextQuestion?: IBotMessage;
  onUserAnswer?: (response: string) => void;
  isWaiting?: boolean;
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

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleUserAnswer = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      if (currentMessage?.type === "button" && onUserAnswer) {
        onUserAnswer(currentMessage.buttonText || "");
      }
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (onUserAnswer) onUserAnswer(option);
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
      if (nextQuestion) setCurrentMessage(nextQuestion);
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

    const boldRegex = /\*([^*]+)\*/g; // Regex to match words wrapped in asterisks

    const textWithBold = displayText.replace(boldRegex, "<strong>$1</strong>");

    switch (currentMessage?.type) {
      case "auto":
        return (
          <Container className="message-content--auto">
            {message?.id === 19 ? (
              <a
                href="https://www.instagram.com/matheustiburtino/"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <TbRobot />
                  <span dangerouslySetInnerHTML={{ __html: textWithBold }} />
                </p>
              </a>
            ) : message?.id === 24 ? (
              <a
                href="https://devzapp.com.br/api-engennier/campanha/api/redirect/62f68647159eaa000112df23"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <TbRobot />
                  <span dangerouslySetInnerHTML={{ __html: textWithBold }} />
                </p>
              </a>
            ) : (
              <p>
                <TbRobot />
                <span dangerouslySetInnerHTML={{ __html: textWithBold }} />
              </p>
            )}
          </Container>
        );
      case "button":
        return (
          <Container className="message-content--button">
            <p>
              <TbRobot />
              {displayText}
            </p>
            <button
              onClick={handleUserAnswer}
              disabled={!isWaiting || buttonClicked}
              type="button"
            >
              {currentMessage.buttonText}
            </button>
          </Container>
        );
      case "options":
        return (
          <Container className="message-content--options">
            <p>
              <TbRobot />
              {displayText}
            </p>
            {renderOptions()}
          </Container>
        );
      default:
        return (
          <Container className="message-content--default">
            <p>
              <TbRobot />
              {displayText}
            </p>
          </Container>
        );
    }
  };

  return <div className="bot-message">{renderMessageContent()}</div>;
};

export default BotMessage;
