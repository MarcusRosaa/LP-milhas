import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

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

export default Container;
