import React from "react";
import Container from "./styles";
import { IBotMessage } from "../../types/types";

interface IUserMessageProps {
  message: string | undefined;
  nameClass: number | undefined; // lastUserResponse.questionId
  nameClass2: number | undefined; // state.questions[state.currentQuestionIndex].id
  questions: IBotMessage[];
}

const UserMessage: React.FC<IUserMessageProps> = ({
  message,
  nameClass,
  nameClass2,
  questions,
}) => {
  return (
    <Container className={`user-message message-id-${nameClass}-${nameClass2}`}>
      <p>
        {nameClass &&
        nameClass - 1 !== 11 &&
        questions[nameClass - 1].type === "number"
          ? Number(message).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })
          : message}
      </p>
    </Container>
  );
};

export default UserMessage;
