import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

import AccountToggle from "./AccountToggle";
import LogedInMenu from "./LogedInMenu";

import styles from "./Account.module.scss";

import {
    isSignedIn,
    clearAuthData,
    getUser
} from "../../utils/localstorage";


const Account = ({ className, ...props }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(isSignedIn());
    // Sử dụng Hook ở đây thay cho useEffect cũ
    const menuRef = useRef(null);
    useOutsideClick(menuRef, () => { setIsMenuOpen(false) }, isMenuOpen);
    return (
        <div
            className={`avatar_container ${className} ${styles.avatar_container || ''}`}
            ref={menuRef}
            {...props}
        >
            {!isLoggedIn && 
                <div
                    className={`account_menu ${styles.sign_container || ''}`}
                >   
                    <a href="/login" >Login</a>
                    <span> / </span>
                    <a href="/register" >Register</a>
                </div>
            }

            <AccountToggle 
                isLoggedIn={isLoggedIn} 
                setIsMenuOpen={() => setIsMenuOpen(prev => !prev)}
                user={getUser()}
                styleModule={styles}
            />
            {isMenuOpen && (
                <div
                    className={`account_menu ${styles.account_menu || ''}`}
                >
                    <LogedInMenu
                        isLoggedIn={isLoggedIn} 
                        user={getUser()} 
                        handlefFuncs={{ 
                            toProfile: () => navigate("/profile"), 
                            onLogout: () => {
                                clearAuthData();
                                setIsLoggedIn(false);
                                navigate("/");
                            },
                            onLogin: () => navigate("/login")
                        }}
                    />
                    <span>Setting</span>
                </div>
            )}
        </div>
    );
};

export default Account;