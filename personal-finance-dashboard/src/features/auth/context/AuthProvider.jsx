import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import * as authService from "../services/authService";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setUser({
        authenticated: true,
      });
    }

    setLoading(false);
  }, [token]);

  const signup = async (userData) => {
    const res = await authService.signup(userData);

    localStorage.setItem("token", res.token);

    setToken(res.token);

    setUser(JSON.stringify(res.user));
  };

  const login = async (credentials) => {
    const res = await authService.login(credentials);
    console.log("")
    localStorage.setItem("token", res.token);

    setToken(res.token);

    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);

    setUser(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signup,
        login,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}