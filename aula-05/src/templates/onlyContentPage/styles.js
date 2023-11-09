import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  `}
`;

export const ContentContainer = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
`;
