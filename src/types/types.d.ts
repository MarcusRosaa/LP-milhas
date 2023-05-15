// Tipos

export type Answer = string | number;

export type Question = {
  id: number;
  text: string;
  options?: string[];
};

export type UserResponse = {
  questionId: number;
  answer: Answer;
};

export type CalculationResult = {
  value: number;
  description: string;
};

export type AppState = {
  questions: Question[];
  userResponses: UserResponse[];
  calculationResult?: CalculationResult;
};
