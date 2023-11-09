import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.small};
    height: 100%;

    aside {
      flex: 1;
      background-color: white;

      nav {
        h2 {
          margin-top: ${theme.spacings.small};
          margin-bottom: ${theme.spacings.small};
          padding: 10px;
        }
      }

      a {
        border-bottom: 1px solid ${theme.colors.gray};
      }
    }

    main {
      flex: 3;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      width: 100%;
      height: 100%;
    }
  `};
`;
