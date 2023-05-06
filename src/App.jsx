import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AppLayout } from './layouts/AppLayout';
import { NotFound } from './pages/NotFound';
import { Products } from './pages/products/Products';
import { ProductDetails } from './pages/products/ProductDetails';
import { Cart } from './pages/Cart';
import { Outlet } from 'react-router-dom';
import { ProtectedRouteChildren } from './components/ProtectedRouteChildren';
import { ProtectedRouteOutlet } from './components/ProtectedRouteOutlet';

const MiCuenta = () => {
	return (
		<div>
			<h1>Mi Cuenta</h1>
			<Outlet />
		</div>
	);
};

const Pedidos = () => {
	return <h1>Pedidos...</h1>;
};

const Login = () => {
	return <h1>Iniciar Sesion...</h1>;
};

function App() {
	return (
		<AppLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/productos" element={<Products />} />
				<Route path="/productos/:productId" element={<ProductDetails />} />
				<Route path="/carrito" element={<Cart />} />
				<Route path="/iniciar-sesion" element={<Login />} />
				{/* 
				<Route
					path="/mi-cuenta"
					element={
						<ProtectedRouteChildren>
							<MiCuenta />
						</ProtectedRouteChildren>
					}
				>
					<Route path="pedidos" element={<Pedidos />} />
				</Route> */}

				<Route element={<ProtectedRouteOutlet />}>
					<Route path="/mi-cuenta" element={<MiCuenta />}>
						<Route path="pedidos" element={<Pedidos />} />
					</Route>
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</AppLayout>
	);
}

export default App;
