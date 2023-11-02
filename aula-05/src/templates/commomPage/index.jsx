import MenuContainer from "src/containers/menuContainer";
import { Footer, Header } from "src/components";
import * as Styled from "./styles";

import PropTypes from "prop-types";

export function CommonPageTemplate({ children }) {
  return (
    <Styled.Container>
      <Header />
      <Styled.ContentContainer>
        <aside>
          <MenuContainer />
        </aside>
        <main>{children}</main>
      </Styled.ContentContainer>

      <Footer />
    </Styled.Container>
  );
}

CommonPageTemplate.propTypes = {
  children: PropTypes.node,
};

export default CommonPageTemplate;
