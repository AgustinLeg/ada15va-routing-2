import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addProduct = (product) => setCart([...cart, product]);

	console.log(cart);

	return (
		<CartContext.Provider value={{ cart, addProduct }}>
			{children}
		</CartContext.Provider>
	);
};
