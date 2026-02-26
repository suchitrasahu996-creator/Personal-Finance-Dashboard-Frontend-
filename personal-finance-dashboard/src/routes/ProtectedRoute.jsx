import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const  {loading} = useAuth();

  if (loading) {

    return (
      <div>
        Loading...
      </div>
    );

  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === null) return <h2>Loading...</h2>;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;