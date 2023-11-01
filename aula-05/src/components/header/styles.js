import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`

        width: 100%;
        height: 70px;
        background-color: ${theme.colors.white};
        display: flex;
        align-items: center;
        padding: ${theme.spacings.small};
        h1 {
            color: ${theme.colors.primary}}
        }
              
    `}
`;
