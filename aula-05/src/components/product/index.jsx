/* eslint-disable react/prop-types */
import { toReais } from "src/utils/toReais";
import * as S from "./styles";

function Product({
  product,
  amount,
  image,
  category,
  description,
  onBuyClick,
}) {
  return (
    <S.Container>
      <figure>
        <img src={image} alt={product} />
      </figure>
      <div>
        <h3>{product}</h3>
        <span>{category}</span>
        <p>{description}</p>
        <div>
          <div>
            <small>{toReais(amount)}</small>
            <button onClick={onBuyClick}>Compra</button>
          </div>
        </div>
      </div>
    </S.Container>
  );
}

export default Product;
