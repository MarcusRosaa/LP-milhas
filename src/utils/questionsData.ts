const questionsData = [
  {
    id: 1,
    text: "Olá, eu sou a sua *calculadora de milhas!* 👋",
    type: "auto",
  },
  {
    id: 2,
    text: "Poderia me informar o seu nome completo, por favor?",
    type: "name",
  },
  {
    id: 3,
    text: "Qual o seu Whatsapp? (Digite com o seu DDD)",
    type: "phone",
  },
  {
    id: 4,
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
    id: 5,
    text: "Bom, essa é a nossa calculadora das milhas, e de acordo com suas respostas, daremos uma quantidade média de milhas que você pode acumular se aplicar as estratégias corretas! Vamos começar?",
    type: "button",
    buttonText: "Vamos começar",
  },
  {
    id: 6,
    text: "Quanto você costuma gastar por mês no cartão de crédito? (Responda com o valor somente com números, exemplo: 5000)",
    type: "number",
  },
  {
    id: 7,
    text: "Quanto você costuma gastar com compras de mercado mensalmente? (Responda somente com números)",
    type: "number",
  },
  {
    id: 8,
    text: "Quanto você costuma gastar com Ifood mensalmente? (Responda somente com numeros)",
    type: "number",
  },

  {
    id: 9,
    text: "Quanto você costuma gastar com roupas, maquiagens, presentes, suplementos, perfumes e outros itens por ANO? (Responda somente com números)",
    type: "number",
  },
  {
    id: 10,
    text: "Você costuma se hospedar em hotéis?",
    options: ["Sim", "Não"],
    type: "options",
  },
  {
    id: 11,
    text: "Você costuma viajar com quantas pessoas da sua familia?",
    type: "number",
  },
  {
    id: 12,
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
    id: 13,
    text: "Você ou alguem da sua familia pretende trocar de celular esse ano?",
    options: ["Sim", "Não"],
    type: "options",
  },
  {
    id: 14,
    text: "Quanto vocês devem gastar com essas compras? (Responda somente com numeros)",
    type: "number",
  },
  {
    id: 15,
    text: "Você gasta quanto de UBER em média por mês?",
    type: "number",
  },
  {
    id: 16,
    text: "Você sabia que todos os gastos acima podem te gerar até 50x mais milhas do que o seu próprio cartão de crédito?",
    options: ["Sabia!", "Não sabia…"],
    type: "options",
  },
  {
    id: 17,
    text: "Estamos fazendo o cálculo da quantidade de milhas que você pode acumular no ano, mas lembrando que isso é apenas uma projeção, e considerando somente o seu acúmulo PASSIVO! Ou seja, sem ter que gastar nada a mais por isso…",
    type: "auto",
  },
  {
    id: 18,
    text: "Existem várias estratégias de acúmulo de forma ativa, e recomendo que já me siga no instagram para aprender mais sobre isso:",
    type: "auto",
  },
  {
    id: 19,
    text: "@matheustiburtino (vou deixar o link no final)",
    type: "auto",
  },
  {
    id: 20,
    text: "O cálculo já está feito, quer saber o resultado?",
    type: "button",
    buttonText: "Obvio, to aqui pra isso!",
  },
];

export default questionsData;
