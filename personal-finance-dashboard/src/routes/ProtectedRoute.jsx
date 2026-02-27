import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
const ProtectedRoute = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user
    ? children
    : <Navigate to="/login" replace />;
};
export default ProtectedRoute;