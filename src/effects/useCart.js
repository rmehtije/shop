import { addNewCart, updateCart, deleteCart } from '../services/api/carts';
import { useDispatch } from 'react-redux';
import { setCart } from '../services/state/store';

function useCart({ userId }) {
    const dispatch = useDispatch();

    const addProduct = async (cart, product) => {
        console.log({ cart})
        if (cart.id) {
            const cartProduct = cart.products.find(cartProduct => cartProduct.id === product.id);

            let updatedProducts;

            if (cartProduct)
                cartProduct.quantity = (cartProduct.quantity || 1) + 1;
            else
                updatedProducts = [...cart.products, product];
            
            const newData = await updateCart(cart.id, {
                userId,
                id: cart.id,
                products: updatedProducts ?? cart.products,
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
        cart.products = cart.products.map(cartProduct => {
            cartProduct.quantity = cartProduct.quantity ?? 1;

            if (cartProduct.id === product.id) cartProduct.quantity = cartProduct.quantity - 1;

            return cartProduct;

        }).filter(cartProduct => cartProduct.quantity !== 0);

        if (!cart.products.length) {
            await deleteCart(cart.id)

            dispatch(setCart({}));
        } else {
            const newData = await updateCart(cart.id, {
                userId,
                id: cart.id,
                products: cart.products,
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
