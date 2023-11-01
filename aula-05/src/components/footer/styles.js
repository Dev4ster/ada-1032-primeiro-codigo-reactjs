import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.small};
  `}
`;
