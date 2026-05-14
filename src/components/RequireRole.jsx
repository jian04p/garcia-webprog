import { Navigate } from 'react-router-dom';
import { getStoredToken, getStoredUserType } from '../utils/auth';

const RequireRole = ({ allowedRoles, children, fallbackPath = '/auth/signin' }) => {
  const token = getStoredToken();
  const userType = getStoredUserType();

  if (!token) {
    return <Navigate to="/auth/signin" replace />;
  }

  if (!allowedRoles.includes(userType)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
};

export default RequireRole;
