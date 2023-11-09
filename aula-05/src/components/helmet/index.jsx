import { Helmet as HelmetNode } from "react-helmet";

function Helmet({ title, description, keywords }) {
  return (
    <HelmetNode>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </HelmetNode>
  );
}

export default Helmet;
