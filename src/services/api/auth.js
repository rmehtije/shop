import { apiUrl } from "./constants";

export const singIn = async (username, password) => {
    const response = await fetch(apiUrl + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
        }),
    });

    return await response.json();
}
