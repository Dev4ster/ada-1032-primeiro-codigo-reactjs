import * as Styled from "./styles";

export function OnlyContentPageTemplate({ children }) {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <main>{children}</main>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}

export default OnlyContentPageTemplate;
