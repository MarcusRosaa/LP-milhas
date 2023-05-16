import React from "react";
import { IUserResponse } from "../../types/types";
import { useChatContext } from "../../context/ChatContext";

interface IUserAnswerProps {
  userResponses: IUserResponse[];
}

const UserAnswer: React.FC<IUserAnswerProps> = ({ userResponses }) => {
  return (
    <div>
      <h3>User Answers:</h3>
      <ul>
        {userResponses.map((response) => (
          <li key={response.questionId}>{response.answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserAnswer;
