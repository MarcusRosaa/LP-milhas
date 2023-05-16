import { styled } from "styled-components";

const Container = styled.div`
  max-width: 90%;
  margin-left: auto;

  @media (min-width: 768px) {
    max-width: 70%;
  }

  @media (min-width: 1200px) {
    max-width: 60%;
  }

  p {
    width: fit-content;
    background-color: #fff;
    padding: 24px;
    margin: 16px 0;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
    color: #1e1e1e;
    margin-left: auto;
    font-size: 14px;
  }
`;

export default Container;
