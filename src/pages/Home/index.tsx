import React, { useState } from "react";

import { Answer, UserResponse } from "../../types/types";
import BotQuestion from "../../components/Question/index";
import { Title, Container } from "./styles";
import UserAnswer from "../../components/Answer";

const Home: React.FC = () => {
  // const handleNextQuestion = (answer: Answer) => {
  //   const { questions, userResponses } = state;
  //   const currentQuestion = questions[userResponses.length];

  //   if (currentQuestion) {
  //     const userResponse: UserResponse = {
  //       questionId: currentQuestion.id,
  //       answer,
  //     };
  //     const updatedResponses = [...userResponses, userResponse];

  //     setState((prevState) => ({
  //       ...prevState,
  //       userResponses: updatedResponses,
  //     }));

  //     if (userResponses.length === 2) {
  //       // Save the responses to the database
  //     }

  //     if (userResponses.length === 5) {
  //       const [response1, response2, response3, response6] = updatedResponses;
  //       const result1 = Number(response1.answer) * 5;
  //       const result2 = Number(response2.answer) * 36;
  //       const result3 = Number(response3.answer) * 60;
  //       const result6 = Number(response6.answer) * 8;

  //       setState((prevState) => ({
  //         ...prevState,
  //         calculationResult: {
  //           value: result1 + result2 + result3 + result6,
  //           description: "Some description",
  //         },
  //       }));
  //     }
  //   }
  // };

  return (
    <>
      <Title>Veja quantas milhas você pode ganhar em um ano</Title>
      <Container>
        <BotQuestion />
        <UserAnswer />
      </Container>
    </>
  );
};

export default Home;
