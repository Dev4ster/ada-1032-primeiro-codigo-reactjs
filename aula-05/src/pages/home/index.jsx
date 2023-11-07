import SliderContainer from "src/containers/sliderContainer";
import { CommonPageTemplate } from "../../templates";
import FeaturedProductsContainer from "src/containers/featuredProductsContainer";
import { PaddingWrapper } from "src/components";

export function HomePage() {
  return (
    <CommonPageTemplate>
      {/* <SliderContainer /> */}
      <PaddingWrapper>
        <h2>Produtos em destaque</h2>
        <br />
        <FeaturedProductsContainer />
      </PaddingWrapper>
    </CommonPageTemplate>
  );
}

export default HomePage;
