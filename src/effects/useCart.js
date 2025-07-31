import React from 'react';
import { addNewCart, updateCart, deleteCart } from '../services/api/carts';
import { useDispatch } from 'react-redux';
import { setCart } from '../services/state/store';
import { UserContext } from '../providers/UserProvider';
import lodash from 'lodash';

function useCart() {
    const dispatch = useDispatch();

    const { values: { authData } } = React.useContext(UserContext);
    const userId = authData.data.userId;

    const updateCartState = data => dispatch(setCart(data));

    const syncCart = async (id, products) => {
        const data = await updateCart(id, { userId, id, products });
        updateCartState(data);
    };

    const getQuantity = ({ quantity }) => quantity || 1;

    const addProduct = async (cart, product) => {
        const cartProducts = cart.products ?? [];

        const existing = lodash.find(cartProducts, { id: product.id });

        const products = existing
            ? lodash.map(cartProducts,
                p => p.id === product.id
                    ? { ...p, quantity: getQuantity(p) + 1 }
                    : p)
            : [...cartProducts, { ...product, quantity: 1 }];

        if (cart.id) {
            await syncCart(cart.id, products);
        } else {
            const newData = await addNewCart({ userId, products });

            updateCartState(newData);
        }
    }

    const removeProduct = async (cart, product) => {
        const cartProducts = cart.products ?? [];

        const products = lodash.chain(cartProducts)
            .map(p => p.id === product.id ? { ...p, quantity: getQuantity(p) - 1 } : p)
            .filter(p => p.quantity > 0)
            .value();

        if (!products.length) {
            await deleteCart(cart.id);

            updateCartState({});
        } else {
            await syncCart(cart.id, products);
        }
    }

    return {
        addProduct,
        removeProduct,
    }
}

export default useCart;
