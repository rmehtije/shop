import { apiUrl } from "./constants";

export const getAllProducts = async () => {
    const response = await fetch(apiUrl + '/products');

    if (!response.ok) {
        throw new Error('Oops, something went wrong with getting products!');
    }

    return await response.json();
}

export const getSingleProduct = async (id) => {
    const response = await fetch(apiUrl + '/products/' + id);

    return await response.json();
}
