import React from "react";
import { useCart } from "../cartContext";
import Teste from "./Teste";

// import { Container } from './styles';

function HeaderCart() {
  const { total, products } = useCart();

  console.log("products", products);
  return (
    <div>
      Total: {total} <Teste />
    </div>
  );
}

export default HeaderCart;
