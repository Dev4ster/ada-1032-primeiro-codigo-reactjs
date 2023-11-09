import { CartProduct } from "src/components";
import { useCart } from "src/context/cartContext";

function CartProductsContainer() {
  const { products } = useCart();

  const uniqueProducts = Array.from(new Set(products.map((p) => p.id))).map(
    (id) => products.find((p2) => p2.id === id)
  );

  const quantosTem = (id) => {
    return products.filter((product) => product.id === id)?.length ?? 0;
  };

  return uniqueProducts.map((product) => (
    <CartProduct key={product.id} {...product} count={quantosTem(product.id)} />
  ));
}

export default CartProductsContainer;
