import { CategoryPage, HomePage } from "src/pages";
import { Home, Grid } from "@styled-icons/feather";

export const ROUTES = [
  {
    path: "/",
    label: "Inicio",
    helmt: {
      title: "Inicio Loja 1032",
      description: "",
      keywords: "",
    },
    icon: <Home />,
    component: <HomePage />,
  },
  {
    path: "/categoria/:category_name",
    label: "Categorias",
    helmt: {
      title: "Categorias Loja 1032",
      description: "",
      keywords: "",
    },
    icon: <Grid />,
    component: <CategoryPage />,
  },
];
