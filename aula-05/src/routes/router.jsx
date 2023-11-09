import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { AppHelmet } from "src/components";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.helmt.title}
            path={route.path}
            element={
              <>
                <AppHelmet {...route.helmt} />
                {route.component}
              </>
            }
          />
        ))}
        <Route path="*" element={<h1>Não encontrado</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
