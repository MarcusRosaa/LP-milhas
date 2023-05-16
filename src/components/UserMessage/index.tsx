import React from "react";

interface IUserMessageProps {
  message: string | undefined;
}

const UserMessage: React.FC<IUserMessageProps> = ({ message }) => {
  return <div className="user-message">{message}</div>;
};

export default UserMessage;
