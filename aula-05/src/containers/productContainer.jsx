import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Product } from "src/components";
import { useCart } from "src/context/cartContext";
import { useProductById } from "src/hooks/useProductById";
import { useProductCategory } from "src/hooks/useProductCategory";

function ProductContainer() {
  const { id } = useParams();
  const { data } = useProductById(id);
  const { getCategoryById } = useProductCategory();
  const category = getCategoryById(data.category);
  const { addProduct } = useCart();

  const handleBuyProduct = () => {
    addProduct(data);
  };

  console.log("data", data);
  return (
    <>
      {!!data?.product && (
        <Helmet>
          <title>Produto - {data?.product}</title>
        </Helmet>
      )}

      <Product
        {...data}
        category={category?.name}
        onBuyClick={handleBuyProduct}
      />
    </>
  );
}

export default ProductContainer;
