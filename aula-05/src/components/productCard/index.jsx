/* eslint-disable react/prop-types */
import * as S from "./styles";

function ProductCard({
  product,
  amount,
  image,
  category,
  onAddToCart,
  onViewDetails,
}) {
  return (
    <S.Container>
      <S.ProductImage src={image} />
      <h3>{product}</h3>
      <S.ProductInfo>
        <div>
          <strong>{amount}</strong>
          <small>{category?.name}</small>
        </div>
        <div>
          <S.ProductDetailsButton onClick={onViewDetails}>
            Detalhes
          </S.ProductDetailsButton>
          <S.ProductAddToCardButton onClick={onAddToCart}>
            Adicionar ao carrinho
          </S.ProductAddToCardButton>
        </div>
      </S.ProductInfo>
    </S.Container>
  );
}

export default ProductCard;
