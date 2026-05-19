const saveToken = (token) => {
    localStorage.setItem("token", token);
};

const getToken = () => {
    return localStorage.getItem("token");
}; 


const removeToken = () => {
    localStorage.removeItem("token");
};

const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

const removeUser = () => {
    localStorage.removeItem("user");
}

const saveAuthData = (token, user) => {
    saveToken(token);
    saveUser(user);
};

const clearAuthData = () => {
    removeToken();
    removeUser();
};

const isSignedIn = () => {
    return !!getToken();
};

export { 
    saveToken, 
    getToken, 
    removeToken, 
    saveUser, 
    getUser, 
    removeUser,
    clearAuthData, 
    isSignedIn, 
    saveAuthData 
};