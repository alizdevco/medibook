import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  useEffect(function () {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    }
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    getSession();
    return function () {
      subscription.unsubscribe();
    };
  }, []);
  const value = { session };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  return useContext(AuthContext);
}
