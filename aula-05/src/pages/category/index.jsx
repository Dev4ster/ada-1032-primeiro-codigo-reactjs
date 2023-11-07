import { PaddingWrapper } from "src/components";
import { CommonPageTemplate } from "../../templates";
import ProductsByCategoryContainer from "src/containers/productsByCategoryContainer";
import { useParams } from "react-router-dom";

export function CategoryPage() {
  const { category_name } = useParams();
  return (
    <CommonPageTemplate>
      <PaddingWrapper>
        <h2>{category_name}</h2>
        <br />
        <ProductsByCategoryContainer />
      </PaddingWrapper>
    </CommonPageTemplate>
  );
}

export default CategoryPage;
