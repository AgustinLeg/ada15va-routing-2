import { SimpleGrid } from '@chakra-ui/react';

import { products } from '../../assets/products';
import { ProductCard } from './components/ProductCard';
// import { Outlet } from 'react-router-dom';

export const Products = () => {
	return (
		<>
			<SimpleGrid
				columns={{ base: 1, md: 2, lg: 3 }}
				gap={10}
				justifyItems="center"
			>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</SimpleGrid>

			{/* <Outlet /> */}
		</>
	);
};
