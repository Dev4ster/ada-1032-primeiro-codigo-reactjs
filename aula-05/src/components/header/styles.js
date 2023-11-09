import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`

        width: 100%;
        height: 70px;
        background-color: ${theme.colors.white};
        display: flex;
        align-items: center;
        padding: ${theme.spacings.small};
        justify-content: space-between;
        h1 {
            color: ${theme.colors.primary}}
        }

        div {
            color: #333;
            small {
                font-weight: ${theme.font.bold};
            }
        }
              
    `}
`;
