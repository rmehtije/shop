import { apiUrl } from "./constants";

export const addNewCart = async (data) => {
    const response = await fetch(apiUrl + '/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export const updateCart = async (cartId, data) => {
    const response = await fetch(apiUrl + '/carts/' + cartId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export const deleteCart = async (cartId) => {
    const response = await fetch(apiUrl + '/carts/' + cartId, {
        method: 'DELETE'
    });

    return await response.json();
}