import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 980px;
  height: 64%;
  margin: 0 auto;
  padding: 0 16px;

  overflow: auto;

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
