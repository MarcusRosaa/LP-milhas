import React from "react";
import { RouterProvider } from "react-router-dom";
import { ChatProvider, useChatContext } from "./context/ChatContext";

import Header from "./components/Header";
import router from "./routes";
import questionsData from "./utils/questionsData";
import GlobalStyles from "./styles/Globals/globalStyles";

function App() {
  const { setCurrentQuestionIndex } = useChatContext();

  // Set the initial question index to 0
  React.useEffect(() => {
    setCurrentQuestionIndex(0);
  }, []);

  return (
    <ChatProvider initialQuestions={questionsData}>
      <GlobalStyles />
      <Header />
      <RouterProvider router={router} />
    </ChatProvider>
  );
}

export default App;
