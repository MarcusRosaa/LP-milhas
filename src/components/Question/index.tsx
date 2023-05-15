import { useState } from "react";
import { AppState } from "../../types/types";
import Container from "./styles";

const BotQuestion: React.FC = () => {
  const [botState, setBotState] = useState<AppState>({
    questions: [
      { id: 0, text: "Olá, eu sou a sua calculadora de milhas! 👋" },
      { id: 1, text: "Poderia me informar o seu nome completo, por favor?" },
      { id: 2, text: "Qual o seu Whatsapp? (Digite com o seu DDD)" },
      {
        id: 3,
        text: "Você já acumula milhas?",
        options: [
          "Acúmulo pouco",
          "Acúmulo uma quantidade razoável",
          "Acúmulo bastante",
          "Não acúmulo praticamente nada",
        ],
      },
      {
        id: 4,
        text: "Quanto você costuma gastar por mês no cartão de crédito?",
      },
      {
        id: 5,
        text: "Quanto você costuma gastar com compras de mercado mensalmente?",
      },
      { id: 6, text: "Quanto você costuma gastar com Ifood mensalmente?" },
      {
        id: 7,
        text: "Quanto você costuma gastar com roupas, maquiagens, presentes, suplementos, perfumes e outros itens por ANO?",
      },
      {
        id: 8,
        text: "Você costuma se hospedar em hotéis?",
        options: ["Sim", "Não"],
      },
      {
        id: 9,
        text: "Você costuma viajar com quantas pessoas da sua família?",
      },
      {
        id: 10,
        text: "Quantas diárias em média você costuma se hospedar em hotéis?",
        options: [
          "de 1-3 diárias",
          "de 3-7 diárias",
          "de 7-14 diárias",
          "de 14-28 diárias",
        ],
      },
      {
        id: 11,
        text: "Você ou alguém da sua família pretende trocar de celular esse ano?",
        options: ["Sim", "Não"],
      },
      { id: 12, text: "Quanto vocês devem gastar com essas compras?" },
      { id: 13, text: "Você gasta quanto de UBER em média por mês?" },
      {
        id: 14,
        text: "Você sabia que todos os gastos acima podem te gerar até 50x mais milhas do que o seu próprio cartão de crédito?",
        options: ["Sabia!", "Não sabia…"],
      },
      { id: 15, text: "O cálculo já está feito, quer saber o resultado?" },
    ],
    userResponses: [],
    calculationResult: undefined,
  });

  return (
    <Container>
      {botState.questions.map((question) => (
        <p key={question.id}>{question.text}</p>
      ))}
    </Container>
  );
};

export default BotQuestion;
