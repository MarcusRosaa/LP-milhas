// types.ts
interface IUserResponse {
  questionId: number | undefined;
  answer: string | undefined;
}

export interface IBotMessage {
  id: number;
  text: string;
  type: "auto" | "options" | "button" | "number";
  options?: string[];
  buttonText?: string;
}
interface IAppState {
  questions: IBotMessage[];
  userResponses: IUserResponse[];
  calculationResult?: any; // Adjust the type according to your needs
  currentQuestionIndex: number;
}

interface IChatContext {
  state: IAppState;
  addResponse: (response: IUserResponse) => void;
  setCurrentQuestionIndex: (index: number) => void;
  currentQuestion: IBotMessage | null;
}

export { IUserResponse, IAppState, IChatContext, IBotMessage };
