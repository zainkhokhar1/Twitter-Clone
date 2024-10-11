
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export const UserContext = createContext();
export const AuthProvider = ({ children }) => {
    let [Auth, setAuth] = useState(localStorage.getItem('AuthToken') ? localStorage.getItem('AuthToken') : null);
    let [id, setId] = useState(localStorage.getItem('userId') ? localStorage.getItem('userId') : null);
    return (
        <AuthContext.Provider value={[Auth, setAuth]}>
            <UserContext.Provider value={[id, setId]}>
                {children}
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export const useid = () => useContext(UserContext);
