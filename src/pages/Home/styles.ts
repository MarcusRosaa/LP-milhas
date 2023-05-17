import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 980px;
  height: calc(85% - 28px);
  margin: 0 auto;
  padding: 0 16px 24px;

  display: flex;
  flex-direction: column;
  justify-content: end;

  @media (min-width: 980px) {
    -webkit-box-shadow: 0px 1px 10px -3px rgba(178, 179, 189, 1);
    -moz-box-shadow: 0px 1px 10px -3px rgba(178, 179, 189, 1);
    box-shadow: 0px 1px 10px -3px rgba(178, 179, 189, 1);
  }

  .messages-container {
    padding-bottom: 16px;
    /* Customize the scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #777;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  height: 11%;

  padding: 0 16px 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
