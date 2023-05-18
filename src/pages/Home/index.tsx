/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { stat } from "fs/promises";
import { useChatContext } from "../../context/ChatContext";
import BotMessage from "../../components/BotMessage";
import UserMessage from "../../components/UserMessage";
import Input from "../../components/Input";
import { Container } from "./styles";
import FinalMilesResults from "../../components/FinalMilesResult";

interface QuestionResponse {
  questionId: number;
  answer: string;
}

interface SavedValues {
  question6?: number;
  question7?: number;
  question8?: number;
  question9?: number;
  question10?: number;
  question11?: number;
  question12?: number;
  question14?: number;
  question15?: number;
  total?: number;
}

const Home: React.FC = () => {
  const { state, addResponse, setCurrentQuestionIndex, currentQuestion } =
    useChatContext();
  const [chatMessages, setChatMessages] = useState<React.ReactNode[]>([]);
  const [isBotMessageEnabled, setBotMessageEnabled] = useState(false);
  const [savedValues, setSavedValues] = useState<SavedValues>({});
  const [divider, setDivider] = useState(1);

  const handleUserAnswer = (response: string) => {
    const currentQuestionId = currentQuestion?.id;

    addResponse({ questionId: currentQuestionId, answer: response });

    // Perform calculations based on user responses
    if (currentQuestionId === 6) {
      const value = Number(response) * 5;
      setSavedValues({ ...savedValues, question6: value });
    } else if (currentQuestionId === 7) {
      const value = Number(response) * 36;
      setSavedValues({ ...savedValues, question7: value });
    } else if (currentQuestionId === 8) {
      const value = Number(response) * 60;
      setSavedValues({ ...savedValues, question8: value });
    } else if (currentQuestionId === 9) {
      const value = Number(response) * 8;
      setSavedValues({ ...savedValues, question9: value });
    } else if (currentQuestionId === 10) {
      if (response === "Sim") {
        setCurrentQuestionIndex(state.currentQuestionIndex + 1);
      } else if (response === "Não") {
        setCurrentQuestionIndex(12);
      }
      return;
    } else if (currentQuestionId === 11) {
      const value = Number(response) / 2;
      setDivider(value);
    } else if (currentQuestionId === 12) {
      let multiplier = 0;
      console.log(response);
      if (response === "De 1-3 diárias") {
        multiplier = 5000;
      } else if (response === "De 3-7 diárias") {
        multiplier = 10000;
      } else if (response === "De 7-14 diárias") {
        multiplier = 20000;
      } else if (response === "De 14-28 diárias") {
        multiplier = 40000;
      }
      const value = divider * multiplier;
      setSavedValues({ ...savedValues, question12: value });
    } else if (currentQuestionId === 13) {
      if (response === "Sim") {
        setCurrentQuestionIndex(state.currentQuestionIndex + 1);
      } else if (response === "Não") {
        setCurrentQuestionIndex(14);
      }
      return;
    } else if (currentQuestionId === 14) {
      const value = Number(response) * 7;
      setSavedValues({ ...savedValues, question14: value });
    } else if (currentQuestionId === 15) {
      const value = Number(response) * 30;
      setSavedValues({ ...savedValues, question15: value });
    } else if (currentQuestionId === 20) {
      const total =
        savedValues &&
        Object.values(savedValues).reduce((accumulator, currentValue) => {
          const numericValue = parseFloat(currentValue!);
          if (!Number.isNaN(numericValue)) {
            return accumulator + numericValue;
          }
          return accumulator;
        }, 0) * 2;

      setSavedValues({ ...savedValues, total });

      return;
    }

    setCurrentQuestionIndex(state.currentQuestionIndex + 1);
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

        // Add the last bot messages here
        if (lastUserResponse.questionId === 20) {
          updatedMessages.push(
            <BotMessage
              key="message-1"
              message={{
                id: 21,
                type: "auto",
                text: `Em um ano, de acordo com os seus gastos, você irá acumular em média ${savedValues.total!.toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }
                )} milhas.`,
              }}
            />,
            <FinalMilesResults totalMiles={savedValues.total} />,
            <BotMessage
              key="message-3"
              message={{
                id: 23,
                type: "auto",
                text: "Quer aprender mais sobre isso em um curso gratuito sobre milhas? Entre no grupo do WhatsApp abaixo que iremos passar todas as informações:",
              }}
            />,
            <BotMessage
              key="message-4"
              message={{
                id: 24,
                type: "auto",
                text: "Grupo Jornada Do Milheiro",
              }}
            />,
            <BotMessage
              key="message-5"
              message={{
                id: 25,
                type: "auto",
                text: "Espero ter ajudado! Se tiver mais alguma dúvida, estou à disposição.",
              }}
            />
          );
        }

        return updatedMessages;
      });
    }
  }, [state.userResponses, state.questions, state.currentQuestionIndex]);

  console.log(savedValues);
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
