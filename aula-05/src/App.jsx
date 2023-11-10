import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import AppRouter from "./routes/router";
import { MenuContextProvider } from "./context/menuContext";
import "react-slideshow-image/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { CartContextProvider } from "./context/cartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
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
