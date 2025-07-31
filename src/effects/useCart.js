import React from 'react';
import { addNewCart, updateCart, deleteCart } from '../services/api/carts';
import { useDispatch } from 'react-redux';
import { setCart } from '../services/state/store';
import { UserContext } from '../providers/UserProvider';

function useCart() {
    const dispatch = useDispatch();

    const { values: { authData } } = React.useContext(UserContext);

    const addProduct = async (cart, product) => {
        if (cart.id) {
            let updatedProducts;

            const cartProduct = cart.products.find(cartProduct => cartProduct.id === product.id);

            if (cartProduct) {
                const newQuantityProduct = { ...product, quantity: (cartProduct.quantity || 1) + 1 };
                updatedProducts = cart.products.map(cartProduct => cartProduct.id === product.id ? newQuantityProduct : cartProduct)
            }
            else
                updatedProducts = [...cart.products, product];

            const newData = await updateCart(cart.id, {
                userId: authData.data.userId,
                id: cart.id,
                products: updatedProducts,
            });

            dispatch(setCart(newData));
        } else {
            const newData = await addNewCart({
                userId: authData.data.userId,
                products: [product],
            });

            dispatch(setCart(newData));
        }
    }

    const removeProduct = async (cart, product) => {
        let updatedProducts = [];

        for (const cartProduct of cart.products) {
            const productWithQuantity = {...cartProduct, quantity: (cartProduct.quantity || 1)};
            if (cartProduct.id === product.id) updatedProducts.push({ ...productWithQuantity, quantity: productWithQuantity.quantity - 1 });
            else updatedProducts.push(productWithQuantity);
        }

        updatedProducts = updatedProducts.filter(cartProduct => cartProduct.quantity > 0);

        if (!updatedProducts.length) {
            await deleteCart(cart.id)

            dispatch(setCart({}));
        } else {
            const newData = await updateCart(cart.id, {
                userId: authData.data.userId,
                id: cart.id,
                products: updatedProducts,
            });

            dispatch(setCart(newData));
        }
    }

    return {
        addProduct,
        removeProduct,
    }
}

export default useCart;
