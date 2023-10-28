import PropTypes from "prop-types";
import { useCart } from "../cartContext";
function Header({ count, changeCount, children }) {
  const { products } = useCart();

  // useEffect(() => {
  //   console.log("Header");
  // }, []);

  // useEffect(() => {
  //   console.log("Header count");
  // }, [count]);

  // useEffect(() => {
  //   console.log("changeCount mudou");
  //   changeCount();
  // }, [changeCount]);
  return (
    <header>
      <h1>Products count: {products.length}</h1>
      {children}
      <h1>{count}</h1>
      <button onClick={changeCount}>increment</button>
    </header>
  );
}

Header.propTypes = {
  count: PropTypes.number,
  changeCount: PropTypes.func,
};
export default Header;
