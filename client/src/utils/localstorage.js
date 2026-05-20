import { jwtDecode } from "jwt-decode";

// Hàm xử lý sau khi nhận được phản hồi (Response) từ API Login của Spring Boot

// setters
const saveToken = (token) => {
    localStorage.setItem("token", token);
};


const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

// getters
const getToken = () => {
    return localStorage.getItem("token");
}; 

const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

// clear
const removeToken = () => {
    localStorage.removeItem("token");
};

const removeUser = () => {
    localStorage.removeItem("user");
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
    saveToken, saveUser,
    getToken, getUser,
    removeToken, removeUser,
    saveAuthData, clearAuthData, 
    isSignedIn
};