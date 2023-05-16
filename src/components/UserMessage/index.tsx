import React from "react";
import Container from "./styles";

interface IUserMessageProps {
  message: string | undefined;
}

const UserMessage: React.FC<IUserMessageProps> = ({ message }) => {
  return (
    <Container className="user-message">
      <p>{message}</p>
    </Container>
  );
};

export default UserMessage;
