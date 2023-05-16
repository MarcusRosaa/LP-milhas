/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState, useMemo } from "react";
import { IUserResponse, IAppState, IChatContext } from "../types/types";

const ChatContext = createContext<IChatContext>({
  state: {
    questions: [],
    userResponses: [],
    calculationResult: undefined,
    currentQuestionIndex: 0,
  },
  addResponse: () => {},
  setCurrentQuestionIndex: () => {},
  currentQuestion: null,
});

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider: React.FC<{
  initialQuestions: any[];
  children: React.ReactNode;
}> = ({ children, initialQuestions }) => {
  const [state, setState] = useState<IAppState>({
    questions: initialQuestions,
    userResponses: [],
    calculationResult: undefined,
    currentQuestionIndex: 0,
  });

  const addResponse = (response: IUserResponse) => {
    setState((prevState) => ({
      ...prevState,
      userResponses: [...prevState.userResponses, response],
    }));
  };

  const setCurrentQuestionIndex = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      currentQuestionIndex: index,
    }));
  };

  const chatContextValue = useMemo(() => {
    return {
      state,
      addResponse,
      setCurrentQuestionIndex,
      currentQuestion: null,
    };
  }, [state, addResponse, setCurrentQuestionIndex]);

  return (
    <ChatContext.Provider value={chatContextValue}>
      {children}
    </ChatContext.Provider>
  );
};
