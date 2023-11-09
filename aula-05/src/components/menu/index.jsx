import { Container } from "./styles";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export function Menu({ items }) {
  return (
    <Container>
      <h2>Navegação</h2>
      <NavLink to="/">Home</NavLink>
      {items?.map((item) => (
        <NavLink key={item.id} to={item.slug}>
          {item.name}
        </NavLink>
      ))}
    </Container>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
};

export default Menu;
