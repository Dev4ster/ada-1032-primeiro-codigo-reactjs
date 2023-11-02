import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import AppRouter from "./routes/router";
import { MenuContextPovider } from "./context/menuContext";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles red={true} height={100} padding={10} />
        <MenuContextPovider>
          <AppRouter />
        </MenuContextPovider>
      </ThemeProvider>
    </>
  );
}

export default App;
