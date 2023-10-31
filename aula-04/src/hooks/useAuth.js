import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

export function useAuth() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("INIT");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setStatus("LOADED");
        setUser(user);
      } else {
        setStatus("FAILED");
      }
    });
  }, []);

  return { user, status };
}
