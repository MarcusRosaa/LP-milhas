import React from "react";
import { IQuestion, IUserResponse } from "../../types/types";
import BotQuestion from "../../components/BotQuestion";
import UserAnswer from "../../components/UserAnswer";
import Footer from "../../components/Footer";
import { useChatContext } from "../../context/ChatContext";

const Home: React.FC = () => {
  const { state, addResponse } = useChatContext();

  const handleUserAnswer = (response: IUserResponse) => {
    addResponse(response);
  };

  return (
    <div>
      {state.questions.map((question: IQuestion, index: number) => (
        <React.Fragment key={question.id}>
          <BotQuestion question={question} onUserAnswer={handleUserAnswer} />
          {index < state.userResponses.length && (
            <UserAnswer
              userResponses={state.userResponses.slice(0, index + 1)}
            />
          )}
        </React.Fragment>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
