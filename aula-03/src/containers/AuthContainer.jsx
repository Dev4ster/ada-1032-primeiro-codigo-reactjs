import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { signOutService } from "../services/auth";

function AuthContainer() {
  const { user, status } = useAuth();
  const navigate = useNavigate("");

  useEffect(() => {
    if (!user && ["FAILED", "LOADED"].includes(status)) {
      navigate("/login");
    }
  }, [user, navigate, status]);

  const handleSignOut = () => {
    signOutService();
    navigate("/login", {
      state: {
        veiodeonde: "clicou_botao_signout",
      },
    });
  };

  return (
    !!user && (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignOut}
        >
          SignOut
        </button>
        <Outlet context={{ user }} />
      </div>
    )
  );
}

export default AuthContainer;
