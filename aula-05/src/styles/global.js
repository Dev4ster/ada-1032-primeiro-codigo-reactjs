import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        ${({ theme }) => css`
          background-color: ${theme.colors.black};
          font-family: ${theme.font.family};
          color: ${theme.colors.white};
        `}
       
        /* ${({ red, height, padding }) => css`
          background-color: ${red ? "red" : "green"};
          height: ${`${height}px`};
          padding: ${`${padding}px`};
        `} */
/* 
        ${({ red }) =>
          red
            ? css`
                background-color: yellow;
              `
            : css`
                background-color: yellow;
              `} */
       
    }

`;

export default GlobalStyles;
