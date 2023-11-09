import { toReais } from "src/utils/toReais";
import * as S from "./styles";

function CartProduct({ image, product, amount, count }) {
  return (
    <S.Container>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div>
        <h3>{product}</h3>
        <small>{toReais(amount * count)}</small>
      </div>
    </S.Container>
  );
}

export default CartProduct;
