import MenuContainer from "src/containers/menuContainer";
import { Footer, Header } from "src/components";
import * as Styled from "./styles";

import PropTypes from "prop-types";
import { useCart } from "src/context/cartContext";

export function CommonPageTemplate({ children }) {
  const cart = useCart();
  return (
    <Styled.Container>
      <Header cart={cart} />
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
