import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

export function useIsLogged() {
  const { user, status } = useAuth();
  const navigate = useNavigate();
  console.log("user status", user, status);
  useEffect(() => {
    if (user && status === "LOADED") {
      navigate("/");
    }
  }, [user, navigate, status]);
}
