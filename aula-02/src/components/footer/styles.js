import styled, { css } from "styled-components";

export const Footer = styled.footer`
  grid-area: footer;
  background-color: green;

  &:hover {
    background-color: yellow;
  }

  ${(props) =>
    props.open &&
    css`
      &:hover {
        background-color: crimson;
      }
      @media screen {
      }
    `}

  ${(props) =>
    css`
      background-color: ${props.color};
    `}
`;
