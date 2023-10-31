import { useLocation, useParams, useSearchParams } from "react-router-dom";

export function ProductPage() {
  const { id_produto } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const page = searchParams.get("page");
  const categoria = searchParams.get("categoria");

  console.log("location", location);
  return (
    <div>
      <h1>Porduto {id_produto}</h1>
      <h2>Page: {page}</h2>
      <h2>categoria: {categoria}</h2>
    </div>
  );
}

export default ProductPage;
