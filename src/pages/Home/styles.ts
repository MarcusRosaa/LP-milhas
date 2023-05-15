import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 980px;
  height: 68vh;
  margin: 0 auto;
  padding: 0 16px;

  overflow: auto;

  /* Customize the scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #edebe6;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
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
  height: 8vh;

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
