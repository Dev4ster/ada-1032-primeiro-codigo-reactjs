import styled, { css } from "styled-components";

export const Container = styled.nav`
  a {
    display: block;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    text-decoration: none;
    background-color: white;
    color: #333;
    ${({ theme }) => css`
      &.active {
        background-color: ${theme.colors.primary};
        color: white;
      }
    `}
  }
`;
