import { Menu } from "src/components";
import { useMenu } from "src/context/menuContext";

function MenuContainer() {
  const items = useMenu();

  return <Menu items={items} />;
}

export default MenuContainer;
