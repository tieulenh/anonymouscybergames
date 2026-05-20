import { jwtDecode } from "jwt-decode";

// setters
const saveToken = (token) => {
    localStorage.setItem("token", token);
};

const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

const saveSideMenu = (menus) => {
    localStorage.setItem("SideMenu", JSON.stringify(menus));
};

// getters
const getToken = () => {
    return localStorage.getItem("token");
}; 

const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

const getSideMenu = () => {
    const menus = localStorage.getItem("SideMenu");
    return menus ? JSON.parse(menus) : null;
};

// clear
const removeToken = () => {
    localStorage.removeItem("token");
};

const removeUser = () => {
    localStorage.removeItem("user");
}

const removeSideMenu = () => {
    localStorage.removeItem("SideMenu");
}

// conbined functions
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
    saveToken, saveUser, saveSideMenu,
    getToken, getUser, getSideMenu,
    removeToken, removeUser, removeSideMenu,
    saveAuthData, clearAuthData, 
    isSignedIn
};