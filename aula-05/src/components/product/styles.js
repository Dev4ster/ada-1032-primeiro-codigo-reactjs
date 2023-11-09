import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.04);
    }
`;

export const Container = styled.div`
  display: flex;

  figure {
    flex: 3;
    img {
      width: 100%;
    }
  }
  > div {
    flex: 1;
    margin-left: 18px;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 42px;
      font-weight: bold;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    p {
      margin-top: 12px;
    }
    > div {
      margin-top: auto;
      margin-bottom: 12px;

      > div {
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.lightGray};
        display: flex;
        margin-top: 24px;
        small {
          padding: 12px;
        }

        button {
          padding: 12px;
          flex: 1;
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
          outline: 0;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          animation: ${animation} 1s ease infinite;

          &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }
`;
