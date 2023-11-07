import styled, { css } from "styled-components";

export const Container = styled.div``;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.small};

    aside {
      flex: 1;
      background-color: red;
    }

    main {
      flex: 3;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      width: 100%;
    }
  `};
`;
