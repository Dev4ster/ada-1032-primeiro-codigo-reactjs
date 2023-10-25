import { Footer as FooterStyle } from "./styles";

const msg = `olá ${2 + 5}`;
const Footer = () => {
  return <FooterStyle>{msg}</FooterStyle>;
};

export default Footer;
