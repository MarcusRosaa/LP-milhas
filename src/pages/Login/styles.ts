import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  width: 100%;

  input {
    padding: 12px;
    font: 16px;
    outline: none;
  }

  button {
    outline: none;
    border: none;
    box-shadow: 1px 1px 3px #00000030;
    border: 1px solid #66666640;
    background-color: #ccc;
    padding: 13px;
    cursor: pointer;
    transition: filter 0.2s ease-in;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
