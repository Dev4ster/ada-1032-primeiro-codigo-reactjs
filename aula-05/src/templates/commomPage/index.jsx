import MenuContainer from "src/containers/menuContainer";
import { Footer, Header } from "src/components";
import * as Styled from "./styles";

import PropTypes from "prop-types";
import { useCart } from "src/context/cartContext";
import { useNavigate } from "react-router-dom";

export function CommonPageTemplate({ children }) {
  const cart = useCart();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/carrinho");
  };
  return (
    <Styled.Container>
      <Header cart={cart} onNavigateToCart={handleGoToCart} />
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
