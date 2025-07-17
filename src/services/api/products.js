import { apiUrl } from "./constants";

export const getAllProducts = async () => {
    const response = await fetch(apiUrl + '/products');

    return await response.json();
}
