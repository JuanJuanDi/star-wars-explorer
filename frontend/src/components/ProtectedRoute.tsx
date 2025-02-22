import { Navigate, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../layouts/Loading'; // Importamos el nuevo componente

const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await axios.get('/api/auth', { withCredentials: true });
    return response.data.autenticado;
  } catch {
    return false;
  }
};

const ProtectedRoute = () => {
  const { data: isAuthenticated, isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuth,
  });

  if (isLoading) return <Loading />; 

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
