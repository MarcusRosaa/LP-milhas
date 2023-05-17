import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (min-width: 980px) {
    padding: 0 0 0 16px;
  } */

  input {
    width: calc(100% - 60px);
    padding: 12px 16px;
    border: 1px solid #00000030;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #1e1e1e;
    font-size: 16px;

    &:focus {
      outline: none;
      border: 1px solid #999;
    }
  }

  svg {
    width: 60px;
    height: 45px;
    padding-left: 8px;
  }

  form {
    width: 100%;
    display: flex;
  }

  button {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;

    &:active {
      outline: none;
      color: #333;
    }

    &:disabled {
      color: #333;
      cursor: not-allowed;
    }
  }
`;

export default Container;
