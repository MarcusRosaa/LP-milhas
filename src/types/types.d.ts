// Tipos

export type Answer = string | number;

export type IUserResponse = {
  questionId: number;
  answer: Answer;
};

export type IQuestion = {
  id: number;
  text: string;
  options?: string[];
  type: string;
  buttonText?: string;
  multiplier?: number;
  onUserAnswer: (response: IUserResponse) => void;
};

export type ICalculationResult = {
  value: number;
  description: string;
};

export type IAppState = {
  questions: Question[];
  userResponses: UserResponse[];
  calculationResult?: CalculationResult;
};
