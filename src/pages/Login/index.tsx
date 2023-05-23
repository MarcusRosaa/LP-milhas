// Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { login } from "../../firebase/Auth";
import { AuthContext } from "../../context/AuthContext";
import { Container, Wrapper } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(AuthContext) as {
    user: User | null;
    loading: boolean;
  };
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    navigate("/dashboard");
  }

  return (
    <Container>
      <h2>Login</h2>
      <Wrapper onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </Wrapper>
    </Container>
  );
};

export default Login;
