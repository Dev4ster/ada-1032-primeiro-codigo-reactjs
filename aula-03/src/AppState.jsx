import { useState } from "react";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

function App() {
  const [page, setPage] = useState("Home");

  const PageComponent = {
    Home: HomePage,
    SignIn: SignInPage,
    SignUp: SignUpPage,
  };

  const Page = PageComponent[page];

  const handleChnagePage = (e) => {
    const page = e.target.textContent;
    setPage(page);
  };
  return (
    <>
      <ul>
        <li onClick={handleChnagePage}>Home</li>
        <li onClick={handleChnagePage}>SignIn</li>
        <li onClick={handleChnagePage}>SignUp</li>
      </ul>
      <Page />
    </>
  );
}

export default App;
