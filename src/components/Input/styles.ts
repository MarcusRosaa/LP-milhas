import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 0 0 16px;
  }

  input {
    width: calc(100% - 60px);
    padding: 12px 16px;
    border: 1px solid white;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:focus {
      outline: none;
      border: 1px solid #bbb;
    }
  }

  svg {
    width: 60px;
    height: 45px;
    padding-left: 8px;
    cursor: pointer;
  }
`;

export default Container;
