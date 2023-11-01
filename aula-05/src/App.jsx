import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles red={true} height={100} padding={10} />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
