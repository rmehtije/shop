import { addNewCart, updateCart, deleteCart } from '../services/api/carts';
import { useDispatch } from 'react-redux';
import { setCart } from '../services/state/store';

function useCart({ userId }) {
    const dispatch = useDispatch();

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
                userId,
                id: cart.id,
                products: updatedProducts,
            });

            dispatch(setCart(newData));
        } else {
            const newData = await addNewCart({
                userId,
                products: [product],
            });

            dispatch(setCart(newData));
        }
    }

    const removeProduct = async (cart, product) => {
        let updatedProducts = [];

        for(const cartProduct of cart.products) {
            if (cartProduct.id === product.id) updatedProducts.push({...cartProduct, quantity: cartProduct.quantity - 1});
            else updatedProducts.push(cartProduct);
        }

        updatedProducts = updatedProducts.filter(cartProduct => cartProduct.quantity !== 0);

        if (!updatedProducts.length) {
            await deleteCart(cart.id)

            dispatch(setCart({}));
        } else {
            const newData = await updateCart(cart.id, {
                userId,
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
