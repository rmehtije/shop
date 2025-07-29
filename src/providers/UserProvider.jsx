import React from 'react';

export const UserContext = React.createContext();

function UserProvider({ children }) {
    const [authData, setAuthData] = React.useState({
        jwt: '',
        data: {}
    });

    const value = {
        values: {
            authData
        },
        actions: {
            setAuthData
        }
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

export default UserProvider;
