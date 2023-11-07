import { useMenu } from "src/context/menuContext";

export const useProductCategory = () => {
  const items = useMenu();

  const getCategoryById = (id) => items.find((menuItem) => menuItem.id === id);
  return { getCategoryById };
};
