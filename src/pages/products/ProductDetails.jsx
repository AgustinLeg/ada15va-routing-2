import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
	List,
	ListItem,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/products';
import { useState } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
// import { useCallback } from 'react';
// import { useLocation } from 'react-router-dom';

export const ProductDetails = () => {
	const { productId } = useParams();
	const [quantity, setQuantity] = useState(1);
	const { addProduct } = useContext(CartContext);
	const navigate = useNavigate();

	const product = useMemo(
		() => products.find((p) => p.id === productId),
		[productId]
	);

	const addProductToCart = async () => {
		addProduct({
			...product,
			quantity,
		});

		// fetch, axios
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve(true);
			}, 1000)
		);

		navigate('/carrito', {
			replace: true,
		});
	};

	return (
		<Container maxW={'7xl'}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}
			>
				<Flex>
					<Image
						rounded={'md'}
						alt={product.name}
						src={product.image}
						fit={'cover'}
						align={'center'}
						w={'100%'}
						h={{ base: '100%', sm: '400px', lg: '500px' }}
					/>
				</Flex>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Box as={'header'}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
						>
							{product.name}
						</Heading>
						<Text
							color={useColorModeValue('gray.900', 'gray.400')}
							fontWeight={300}
							fontSize={'2xl'}
						>
							${product.price} USD
						</Text>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={'column'}
						divider={
							<StackDivider
								borderColor={useColorModeValue('gray.200', 'gray.600')}
							/>
						}
					>
						<Text
							color={useColorModeValue('gray.500', 'gray.400')}
							fontSize={'2xl'}
							fontWeight={'300'}
						>
							{product.description}
						</Text>

						<Box>
							<Text
								fontSize={{ base: '16px', lg: '18px' }}
								color={useColorModeValue('yellow.500', 'yellow.300')}
								fontWeight={'500'}
								textTransform={'uppercase'}
								mb={'4'}
							>
								Categorias
							</Text>

							<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
								<List spacing={2}>
									{product.categories.map((category) => (
										<ListItem key={category}>{category}</ListItem>
									))}
								</List>
							</SimpleGrid>
						</Box>
					</Stack>
					<NumberInput
						defaultValue={1}
						min={1}
						max={product.stock}
						onChange={(value) => setQuantity(Number(value))}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>

					<Button
						rounded={'none'}
						w={'full'}
						mt={8}
						size={'lg'}
						py={'7'}
						bg={useColorModeValue('gray.900', 'gray.50')}
						color={useColorModeValue('white', 'gray.900')}
						textTransform={'uppercase'}
						_hover={{
							transform: 'translateY(2px)',
							boxShadow: 'lg',
						}}
						onClick={addProductToCart}
					>
						Agregar al Carrito
					</Button>
				</Stack>
			</SimpleGrid>
		</Container>
	);
};
