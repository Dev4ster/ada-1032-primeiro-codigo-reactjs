/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Header({ cart }) {
  console.log("cart", cart);
  return (
    <Container>
      <h1>Store - 1032</h1>
      <div>
        <small>Carrinho: {cart?.products?.length}</small>
      </div>
    </Container>
  );
}

export default Header;
