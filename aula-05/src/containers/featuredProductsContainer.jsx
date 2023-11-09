import ProductCard from "src/components/productCard";
import { useCart } from "src/context/cartContext";
import useFeaturedProducts from "src/hooks/useFeaturedProducts";
import { useProductCategory } from "src/hooks/useProductCategory";
import { toReais } from "src/utils/toReais";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

function FeaturedProductsContainer() {
  const { data } = useFeaturedProducts();
  const { getCategoryById } = useProductCategory();
  const { addProduct } = useCart();

  const handleAddProduct = (product) => {
    addProduct(product);
  };

  return (
    <Container>
      {data.map((product) => (
        <ProductCard
          key={product.id}
          amount={toReais(product.amount)}
          category={getCategoryById(product.category)}
          image={product.image}
          product={product.product}
          onAddToCart={() => handleAddProduct(product)}
        />
      ))}
    </Container>
  );
}

export default FeaturedProductsContainer;
