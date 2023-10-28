import { Footer as FooterStyle } from "./styles";

const msg = `olá ${2 + 5}`;
const Footer = () => {
  return (
    <FooterStyle open={true} color="blue">
      {msg}
    </FooterStyle>
  );
};

export default Footer;
