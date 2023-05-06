import { HStack, Heading, Link, SimpleGrid } from '@chakra-ui/react';
// Renombramos la importacion de Link por "RouterLink"
// import { Link as RouterLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const NavApp = () => {
	return (
		<SimpleGrid columns={2}>
			<Heading>Shop</Heading>

			<HStack as="nav" justifyContent="flex-end" gap={5}>
				<Link as={NavLink} to="/">
					Home
				</Link>
				<Link as={NavLink} to="/productos">
					Productos
				</Link>
				<Link as={NavLink} to="/iniciar-sesion">
					Iniciar Sesion
				</Link>
				<Link as={NavLink} to="/crear-cuenta">
					Crear Cuenta
				</Link>
			</HStack>
		</SimpleGrid>
	);
};
