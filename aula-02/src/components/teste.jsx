import { useCart } from "../cartContext";

// import { Container } from './styles';

function Teste() {
  const { total } = useCart();

  return <div>TESTE COMPONENT: {total}</div>;
}

export default Teste;
