import PropTypes from "prop-types";
import { useEffect } from "react";
function Header({ count, changeCount }) {
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
