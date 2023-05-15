import { styled } from "styled-components";

export const Container = styled.div`
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  width: 200px;

  @media (min-width: 768px) {
    width: 250px;
  }

  :visited {
    color: none;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
