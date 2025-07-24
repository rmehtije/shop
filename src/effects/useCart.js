import React from 'react';
import { addNewCart, updateCart, deleteCart } from '../services/api/carts';

function useCart({ userId }) {
    const [cart, setCart] = React.useState({});

    const addProduct = async (product) => {
        if (cart.id) {
            const cartProduct = cart.products.find(cartProduct => cartProduct.id === product.id);

            if (cartProduct)
                cartProduct.quantity = (cartProduct.quantity || 1) + 1;
            else
                cart.products.push(product);
            
            const newData = await updateCart(cart.id, {
                userId,
                id: cart.id,
                products: cart.products,
            });

            setCart(newData);
        } else {
            const newData = await addNewCart({
                userId,
                products: [product],
            });

            setCart(newData);
        }
    }

    const removeProduct = async (product) => {
        cart.products = cart.products.map(cartProduct => {
            cartProduct.quantity = cartProduct.quantity ?? 1;

            if (cartProduct.id === product.id) cartProduct.quantity = cartProduct.quantity - 1;

            return cartProduct;

        }).filter(cartProduct => cartProduct.quantity !== 0);

        if (!cart.products.length) {
            await deleteCart(cart.id)

            setCart({});
        } else {
            const newData = await updateCart(cart.id, {
                userId,
                id: cart.id,
                products: cart.products,
            });

            setCart(newData);
        }
    }

    return {
        addProduct,
        removeProduct,
        cart,
    }
}

export default useCart;
