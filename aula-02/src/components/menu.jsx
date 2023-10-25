import Proptypes from "prop-types";

function Menu({ subtitle, tipo, items: links, date }) {
  return (
    <>
      <p>
        {subtitle} - {tipo}
      </p>
      <nav>
        <a>{date?.getTime()}</a>
        {links?.map((link, index) => (
          <a key={`${link.label}-${index}`} href={link.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}

Menu.propTypes = {
  atitle: Proptypes.string,
  subtitle: Proptypes.string.isRequired,
  tipo: Proptypes.oneOf(["grande", "pequeno"]),
  dado: Proptypes.shape({
    numeroQualquer: Proptypes.number.isRequired,
  }),
  items: Proptypes.arrayOf(
    Proptypes.shape({
      label: Proptypes.string,
      link: Proptypes.string,
    })
  ).isRequired,
  date: Proptypes.instanceOf(Date),
};

Menu.defaultProps = {
  title: "DEFAULT AQUI",
  items: [],
};
export default Menu;
