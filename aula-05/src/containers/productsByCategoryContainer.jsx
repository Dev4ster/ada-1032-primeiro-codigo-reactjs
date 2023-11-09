import { useNavigate, useParams } from "react-router-dom";
import { AppHelmet, ProductCard } from "src/components";
import { useCart } from "src/context/cartContext";
import { useProductCategory } from "src/hooks/useProductCategory";
import useProductsByCategory from "src/hooks/useProductsByCategory";
import { toReais } from "src/utils/toReais";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

function ProductsByCategoryContainer() {
  const { category_name } = useParams();
  const { data } = useProductsByCategory(category_name);
  const { getCategoryById } = useProductCategory();
  const { addProduct } = useCart();

  const navigate = useNavigate();
  const handleAddProduct = (product) => {
    addProduct(product);
  };

  const handleNavigate = (product) => {
    navigate(`/produto/${product.product}/${product.id}`);
  };
  return (
    <Container>
      <AppHelmet
        title={`Categoria - ${
          category_name[0].toUpperCase() + category_name.slice(1)
        }`}
      />

      {data.map((product) => (
        <ProductCard
          key={product.id}
          amount={toReais(product.amount)}
          category={getCategoryById(product.category)}
          image={product.image}
          product={product.product}
          onAddToCart={() => handleAddProduct(product)}
          onViewDetails={() => handleNavigate(product)}
        />
      ))}
    </Container>
  );
}

export default ProductsByCategoryContainer;
