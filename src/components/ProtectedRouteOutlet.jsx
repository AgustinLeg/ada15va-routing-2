import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const ProtectedRouteOutlet = () => {
	const user = false;

	if (!user) {
		return <Navigate to="/iniciar-sesion" replace />;
	}

	return <Outlet />;
};
