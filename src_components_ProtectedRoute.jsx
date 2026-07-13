import { Navigate } from 'react-router-dom';
// Simple auth check (replace with real context)
const useAuth = () => ({ isAdmin: true }); // Mock for now

export default function ProtectedRoute({ children }) {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/" replace />;
}