import React, { useState, useEffect } from "react";
import { useChatContext } from "../../context/ChatContext";
import BotMessage from "../../components/BotMessage";
import UserMessage from "../../components/UserMessage";
import Input from "../../components/Input";

const Home: React.FC = () => {
  const { state, addResponse, setCurrentQuestionIndex, currentQuestion } =
    useChatContext();
  const [chatMessages, setChatMessages] = useState<any[]>([]);

  const handleUserAnswer = (response: string) => {
    addResponse({ questionId: currentQuestion?.id, answer: response });
    setCurrentQuestionIndex(state.currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (currentQuestion !== null) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        <BotMessage
          key={`bot-${currentQuestion.id}`}
          message={currentQuestion}
          nextQuestion={state.questions[state.currentQuestionIndex]}
          onUserAnswer={handleUserAnswer}
          isWaiting={state.currentQuestionIndex > state.userResponses.length}
        />,
      ]);
    }
  }, [currentQuestion, state.questions, state.currentQuestionIndex]);

  useEffect(() => {
    if (state.userResponses.length > 0) {
      const lastUserResponse =
        state.userResponses[state.userResponses.length - 1];
      setChatMessages((prevMessages) => [
        ...prevMessages,
        <UserMessage
          key={`user-${lastUserResponse.questionId}`}
          message={lastUserResponse.answer}
        />,
      ]);
    }
  }, [state.userResponses]);

  return (
    <div className="chat-container">
      <div className="messages-container">
        {chatMessages.map((message, index) => (
          <React.Fragment key={`message-${index}`}>
            {message}
          </React.Fragment>
        ))}
      </div>
      <div className="input-container">
        {currentQuestion && (
          <Input
            onUserAnswer={handleUserAnswer}
            questionId={currentQuestion.id}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
