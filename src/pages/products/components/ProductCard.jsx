import {
	Card,
	CardBody,
	Image,
	Stack,
	Heading,
	Text,
	Divider,
	CardFooter,
	ButtonGroup,
	Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
	const { name, image, price, description, id } = product;

	return (
		<Card maxW="sm">
			<CardBody>
				<Image src={image} alt={name} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{name}</Heading>
					<Text>{description}</Text>
					<Text color="blue.600" fontSize="2xl">
						${price}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2">
					<Button
						as={Link}
						to={`/productos/${id}`}
						// to={id}
						variant="solid"
						colorScheme="blue"
					>
						Ver Detalles
					</Button>
					<Button variant="ghost" colorScheme="blue">
						Add to cart
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};
