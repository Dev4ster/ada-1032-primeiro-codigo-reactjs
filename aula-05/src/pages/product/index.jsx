import { PaddingWrapper } from "src/components";
import ProductContainer from "src/containers/productContainer";
import { CommonPageTemplate } from "src/templates";

export function ProductPage() {
  return (
    <CommonPageTemplate>
      <PaddingWrapper>
        <h2>Produto</h2>
        <br />
        <ProductContainer />
      </PaddingWrapper>
    </CommonPageTemplate>
  );
}

export default ProductPage;
