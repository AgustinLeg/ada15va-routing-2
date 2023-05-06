import { Flex, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	const backPage = () => navigate(-1);

	return (
		<Flex
			height="100%"
			width="100%"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			py={50}
		>
			<Heading>404</Heading>
			{/* <Link to="/">Volver al inicio</Link> */}

			<Button onClick={backPage}>Volver</Button>
		</Flex>
	);
};
