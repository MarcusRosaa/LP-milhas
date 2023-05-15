import { SetStateAction, useState } from "react";
import Container from "./styles";

const Input = () => {
  const [text, setText] = useState(""); // Initialize state with an empty string

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value); // Update the state with the new input value
  };

  return (
    <Container>
      <input type="text" value={text} onChange={handleChange} />
      <p>You entered: {text}</p>
    </Container>
  );
};

export default Input;
