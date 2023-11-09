import CartProductsContainer from "src/containers/cartProductsContainer";
import OnlyContentPageTemplate from "src/templates/onlyContentPage";

function CartPage() {
  return (
    <OnlyContentPageTemplate>
      <h1>Carrinho</h1>
      <CartProductsContainer />
    </OnlyContentPageTemplate>
  );
}

export default CartPage;
