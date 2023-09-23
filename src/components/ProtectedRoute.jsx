import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const ProtectedRoute = ({ Component, allowedRoles }) => {
  const { user } = useContext(UserContext);
  const rolName = user ? user.rol : null;

  const isAuthorized = allowedRoles == rolName

  return (
    isAuthorized ? <Component /> :  <Navigate to="/inicio" replace />
  )


}
