/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState, useMemo } from "react";
import {
  IUserResponse,
  IAppState,
  IChatContext,
  IBotMessage,
} from "../types/types";

const ChatContext = createContext<IChatContext>({
  state: {
    questions: [],
    userResponses: [],
    currentQuestionIndex: 0,
  },
  addResponse: () => {},
  setCurrentQuestionIndex: () => {},
  currentQuestion: {
    id: 0,
    text: "",
    type: "",
    options: [],
    buttonText: "",
  },
});

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider: React.FC<{
  initialQuestions: IBotMessage[];
  children: React.ReactNode;
}> = ({ children, initialQuestions }) => {
  console.log(initialQuestions);
  const [state, setState] = useState<IAppState>({
    questions: initialQuestions,
    userResponses: [],
    currentQuestionIndex: 0,
  });

  const addResponse = (response: IUserResponse) => {
    setState((prevState) => ({
      ...prevState,
      userResponses: [...prevState.userResponses, response],
    }));
  };

  const setCurrentQuestionIndex = (index: number) => {
    if (index >= 0 && index < state.questions.length) {
      setState((prevState) => ({
        ...prevState,
        currentQuestionIndex: index,
      }));
    }
  };

  const currentQuestion = state.questions[state.currentQuestionIndex];

  const chatContextValue = useMemo(() => {
    return {
      state,
      addResponse,
      setCurrentQuestionIndex,
      currentQuestion,
    };
  }, [state, addResponse, setCurrentQuestionIndex, currentQuestion]);

  return (
    <ChatContext.Provider value={chatContextValue}>
      {children}
    </ChatContext.Provider>
  );
};
