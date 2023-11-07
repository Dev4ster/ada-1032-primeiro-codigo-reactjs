import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import AppRouter from "./routes/router";
import { MenuContextProvider } from "./context/menuContext";
import "react-slideshow-image/dist/styles.css";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MenuContextProvider>
          <CartContextProvider>
            <AppRouter />
          </CartContextProvider>
        </MenuContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
