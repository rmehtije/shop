import { apiUrl } from "./constants";

export const addNewUser = async ({ username, email, password }) => {
    const response = await fetch(apiUrl + '/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    return await response.json();
};
