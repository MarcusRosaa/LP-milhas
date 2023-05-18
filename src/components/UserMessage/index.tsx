import React from "react";
import Container from "./styles";

interface IUserMessageProps {
  message: string | undefined;
  nameClass: number | undefined;
  nameClass2: number | undefined;
}

const UserMessage: React.FC<IUserMessageProps> = ({
  message,
  nameClass,
  nameClass2,
}) => {
  return (
    <Container className={`user-message message-id-${nameClass}-${nameClass2}`}>
      <p>{message}</p>
    </Container>
  );
};

export default UserMessage;
