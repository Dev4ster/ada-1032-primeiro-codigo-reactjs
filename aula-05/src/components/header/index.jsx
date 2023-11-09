/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Header({ cart, onNavigateToCart }) {
  return (
    <Container>
      <h1>Store - 1032</h1>
      <div>
        <small onClick={onNavigateToCart}>
          Carrinho: {cart?.products?.length}
        </small>
      </div>
    </Container>
  );
}

export default Header;
