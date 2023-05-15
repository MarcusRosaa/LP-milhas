import { RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import router from "./routes";
import GlobalStyles from "./styles/Globals/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
