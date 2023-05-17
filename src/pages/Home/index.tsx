/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { useChatContext } from "../../context/ChatContext";
import BotMessage from "../../components/BotMessage";
import UserMessage from "../../components/UserMessage";
import Input from "../../components/Input";
import { Container } from "./styles";

const Home: React.FC = () => {
  const { state, addResponse, setCurrentQuestionIndex, currentQuestion } =
    useChatContext();
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [isBotMessageEnabled, setBotMessageEnabled] = useState(false);

  const handleUserAnswer = (response: string) => {
    addResponse({ questionId: currentQuestion?.id, answer: response });

    if (currentQuestion?.id === 10 && response === "Não") {
      // Skip to question 13
      const question13Index = state.questions.findIndex(
        (question) => question.id === 13
      );
      setCurrentQuestionIndex(question13Index);
    } else if (currentQuestion?.id === 13 && response === "Não") {
      // Skip to question 15
      const question15Index = state.questions.findIndex(
        (question) => question.id === 15
      );
      setCurrentQuestionIndex(question15Index);
    } else {
      setCurrentQuestionIndex(state.currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (state.questions !== null && currentQuestion) {
      const newMessages = [
        ...chatMessages,
        <BotMessage
          key={`bot-${currentQuestion.id}`}
          message={currentQuestion}
          nextQuestion={state.questions[state.currentQuestionIndex]}
          onUserAnswer={handleUserAnswer}
          isWaiting={state.currentQuestionIndex >= state.userResponses.length}
        />,
      ];

      if (currentQuestion.type === "auto") {
        setCurrentQuestionIndex(state.currentQuestionIndex + 1);
        setBotMessageEnabled(true);
      }

      setChatMessages(newMessages);
    }
  }, [state.questions, currentQuestion, state.currentQuestionIndex]);

  useEffect(() => {
    if (state.userResponses.length > 0) {
      const lastUserResponse =
        state.userResponses[state.userResponses.length - 1];

      setChatMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];

        // Find the index of the last bot message in the chat messages
        let lastBotMessageIndex = prevMessages.length - 1;
        while (
          lastBotMessageIndex >= 0 &&
          !React.isValidElement(updatedMessages[lastBotMessageIndex])
        ) {
          lastBotMessageIndex -= 1;
        }

        if (lastBotMessageIndex >= 0) {
          // Insert the user's response above the next bot message
          updatedMessages.splice(
            lastBotMessageIndex,
            0,
            <UserMessage
              key={`user-${lastUserResponse.questionId}`}
              message={lastUserResponse.answer}
            />
          );
        }

        // Add the new bot message
        updatedMessages.push(
          <BotMessage
            key={`bot-${lastUserResponse.questionId}`}
            message={null}
            nextQuestion={state.questions[state.currentQuestionIndex]}
            onUserAnswer={handleUserAnswer}
            isWaiting={state.currentQuestionIndex >= state.userResponses.length}
          />
        );

        return updatedMessages;
      });
    }
  }, [state.userResponses]);

  console.log(JSON.stringify(state.userResponses, null, 2));

  return (
    <Container className="chat-container">
      <div className="messages-container">
        <div className="messages-container-wrapper">
          {chatMessages.map((message, index) => (
            <React.Fragment key={`message-${index}`}>{message}</React.Fragment>
          ))}
        </div>
      </div>
      <div className="input-container">
        <Input
          onUserAnswer={handleUserAnswer}
          questionId={currentQuestion?.id}
          isQuestionDisabled={
            currentQuestion?.type === "button" ||
            currentQuestion?.type === "options" ||
            currentQuestion?.type === "auto"
          }
          currentQuestion={state.questions}
        />
      </div>
    </Container>
  );
};

export default Home;
