import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, SignInPage, SignUpPage } from "./pages";
import AppContainer from "./containers/AppContainer";
import AuthContainer from "./containers/AuthContainer";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="/produto" element={<ProductPage />} />
          <Route path="/produto/:id_produto" element={<ProductPage />} />
          <Route path="/" element={<AuthContainer />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
