export type Answer = string | number;

export interface IUserResponse {
  questionId: number;
  answer?: Answer;
}

export interface IQuestion {
  id: number;
  text?: string;
  options?: string[];
  type: string;
  buttonText?: string;
  multiplier?: number;
}

export interface ICalculationResult {
  value: number;
  description: string;
}

export interface IAppState {
  questions: IQuestion[];
  userResponses: IUserResponse[];
  calculationResult?: ICalculationResult;
  currentQuestionIndex: number;
}

export interface IChatContext {
  state: IAppState;
  addResponse: (response: IUserResponse) => void;
  setCurrentQuestionIndex: (index: number) => void;
  currentQuestion: IQuestion | null; // Add currentQuestion property
}
