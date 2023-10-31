import { Link, Outlet, useLocation } from "react-router-dom";

function AppContainer() {
  const location = useLocation();

  if (location.pathname.includes("/login")) {
    console.log("ta no login");
  } else {
    console.log("não ta no login");
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mr-4">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item mr-4">
                <Link
                  to="/produto"
                  state={{
                    sla: "oi",
                  }}
                >
                  Produto
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="cadastro">Cadastro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppContainer;
