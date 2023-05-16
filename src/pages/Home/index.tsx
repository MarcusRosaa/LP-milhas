import React, { useState } from "react";
import { Title, Container } from "./styles";
import BotQuestion from "../../components/Question";
import UserAnswer from "../../components/Answer";
import { IAppState, IQuestion, IUserResponse } from "../../types/types";

const Home: React.FC = () => {
  const [botState, setBotState] = useState<IAppState>({
    questions: [
      {
        id: 0,
        text: "Olá, eu sou a sua *calculadora de milhas!* 👋",
        type: "auto",
      },
      {
        id: 1,
        text: "Poderia me informar o seu nome completo, por favor?",
        type: "name",
      },
      {
        id: 2,
        text: "Qual o seu Whatsapp? (Digite com o seu DDD)",
        type: "phone",
      },
      {
        id: 3,
        text: "Você já acumula milhas?",
        options: [
          "Acúmulo pouco",
          "Acúmulo uma quantidade razoável",
          "Acúmulo bastante",
          "Não acúmulo praticamente nada",
        ],
        type: "options",
      },
      {
        id: 4,
        text: "Bom, essa é a nossa calculadora das milhas, e de acordo com suas respostas, daremos uma quantidade média de milhas que você pode acumular se aplicar as estratégias corretas! Vamos começar?",
        type: "button",
        buttonText: "Vamos começar",
      },
      {
        id: 5,
        text: "Quanto você costuma gastar por mês no cartão de crédito? (Responda com o valor somente com números, exemplo: 5000)",
        type: "number",
      },
      {
        id: 6,
        text: "Quanto você costuma gastar com compras de mercado mensalmente? (Responda somente com números)",
        type: "number",
      },
      {
        id: 7,
        text: "Quanto você costuma gastar com Ifood mensalmente? (Responda somente com numeros)",
        type: "number",
      },

      {
        id: 8,
        text: "Quanto você costuma gastar com roupas, maquiagens, presentes, suplementos, perfumes e outros itens por ANO? (Responda somente com números)",
        type: "number",
      },
      {
        id: 9,
        text: "Você costuma se hospedar em hotéis?",
        options: ["Sim", "Não"],
        type: "options",
      },
      {
        id: 10,
        text: "Você costuma viajar com quantas pessoas da sua familia?",
        type: "number",
      },
      {
        id: 11,
        text: "Quantas diárias em média você costuma se hospedar em hotéis?",
        options: [
          "De 1-3 diárias",
          "De 3-7 diárias",
          "De 7-14 diárias",
          "De 14-28 diárias",
        ],
        type: "options",
      },
      {
        id: 12,
        text: "Você ou alguem da sua familia pretende trocar de celular esse ano?",
        options: ["Sim", "Não"],
        type: "options",
      },
      {
        id: 13,
        text: "Quanto vocês devem gastar com essas compras? (Responda somente com numeros)",
        type: "number",
      },
      {
        id: 14,
        text: "Você gasta quanto de UBER em média por mês?",
        type: "number",
      },
      {
        id: 15,
        text: "Você sabia que todos os gastos acima podem te gerar até 50x mais milhas do que o seu próprio cartão de crédito?",
        options: ["Sabia!", "Não sabia…"],
        type: "options",
      },
      {
        id: 16,
        text: "Estamos fazendo o cálculo da quantidade de milhas que você pode acumular no ano, mas lembrando que isso é apenas uma projeção, e considerando somente o seu acúmulo PASSIVO! Ou seja, sem ter que gastar nada a mais por isso…",
        type: "auto",
      },
      {
        id: 17,
        text: "Existem várias estratégias de acúmulo de forma ativa, e recomendo que já me siga no instagram para aprender mais sobre isso:",
        type: "auto",
      },
      {
        id: 18,
        text: "@matheustiburtino (vou deixar o link no final)",
        type: "auto",
      },
      {
        id: 19,
        text: "O cálculo já está feito, quer saber o resultado?",
        type: "button",
        buttonText: "Obvio, to aqui pra isso!",
      },
    ],
    userResponses: [],
    calculationResult: undefined,
  });

  const handleUserAnswer = (response: IUserResponse) => {
    setBotState((prevState) => {
      const updatedResponses = [...prevState.userResponses, response];
      return {
        ...prevState,
        userResponses: updatedResponses,
      };
    });
  };

  const getCurrentQuestion = (): IQuestion | undefined => {
    const { questions, userResponses } = botState;
    const currentQuestionIndex = userResponses.length;

    if (currentQuestionIndex < questions.length) {
      return questions[currentQuestionIndex];
    }

    return undefined; // All questions answered
  };

  const currentQuestion = getCurrentQuestion();

  return (
    <>
      <Title>Veja quantas milhas você pode ganhar em um ano</Title>
      <Container>
        {currentQuestion && (
          <BotQuestion
            text={currentQuestion.text}
            id={currentQuestion.id}
            type={currentQuestion.type}
            multiplier={currentQuestion.multiplier}
            options={currentQuestion.options}
            buttonText={currentQuestion.buttonText}
            onUserAnswer={handleUserAnswer} // Pass the onUserAnswer prop
          />
        )}
        <UserAnswer onUserAnswer={handleUserAnswer} />
      </Container>
    </>
  );
};

export default Home;
