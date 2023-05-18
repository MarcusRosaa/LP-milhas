import { styled } from "styled-components";

export const Container = styled.div`
  .message-content--auto {
    width: 90%;

    @media (min-width: 768px) {
      width: 70%;
    }

    @media (min-width: 1200px) {
      max-width: 60%;
    }

    div {
      width: auto;
      background-color: #fff;
      padding: 24px;
      margin: 16px 0;
      box-shadow: -2px 2px 4px rgb(0 0 0 / 10%);
      color: #1e1e1e;
      font-size: 14px;
      align-items: center;

      p {
        margin-bottom: 10px;

        span {
          font-weight: 600;
          letter-spacing: 0.3px;
        }
      }
    }
  }
`;

export const Total = styled.p``;

export const InternationalTravels = styled.p``;

export const NationalTravels = styled.p``;

export const MondeyInPocket = styled.p``;
