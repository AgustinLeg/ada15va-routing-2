import { Navigate } from 'react-router-dom';

export const ProtectedRouteChildren = ({ children }) => {
	const user = false;

	if (!user) {
		return <Navigate to="/iniciar-sesion" replace />;
	}

	return children;
};
