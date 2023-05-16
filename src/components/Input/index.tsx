import { SetStateAction, useState } from "react";
import { MdSend } from "react-icons/md";
import Container from "./styles";

const Input = () => {
  const [text, setText] = useState(""); // Initialize state with an empty string
  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value); // Update the state with the new input value
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (text.trim() === "") {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);
    // Passar o valor para o componente Answer ou fazer qualquer outra ação necessária
    console.log("Valor do input:", text);
    setText("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">
          <MdSend />
        </button>
      </form>
    </Container>
  );
};

export default Input;
