import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.helmt.title}
            path={route.path}
            element={route.component}
          />
        ))}
        <Route path="*" element={<h1>Não encontrado</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
