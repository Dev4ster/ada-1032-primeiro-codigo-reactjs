import { Footer, Header, Menu } from "../../components";
import * as Styled from "./styles";

import PropTypes from "prop-types";

export function CommonPageTemplate({ children }) {
  return (
    <Styled.Container>
      <Header />
      <Styled.ContentContainer>
        <aside>
          <Menu />
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
