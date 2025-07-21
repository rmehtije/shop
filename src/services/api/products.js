import { apiUrl } from "./constants";

export const getAllProducts = async () => {
    const response = await fetch(apiUrl + '/products');

    return await response.json();
}

export const getSingleProduct = async (id) => {
    const response = await fetch(apiUrl + '/products/' + id);

    return await response.json();
}
