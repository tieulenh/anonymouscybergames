import { useRef, useState } from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";
import AccountMenu from "./AccountMenu";
import "./Account.module.scss";

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
            className={`avatar_container ${className}`}
            ref={menuRef}
            {...props}
        >
            <div
                className="avatar_img" 
                onClick={() => setIsMenuOpen(prev => !prev)}
                style={{
                    cursor: "pointer",
                    width: '36px',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    border: '2px solid #00ff4c',
                    overflow: 'hidden'

                }}
            >
                {isLoggedIn ? (
                    <img 
                        src={getUser()?.avatarUrl || null}
                        style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            objectFit: 'cover'
                        }}
                    />
                    
                ) : (
                    <User 
                        style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                objectFit: 'cover'
                            }}
                    />
                )}
            </div>
            {isMenuOpen && (
                <div
                    className={"account_menu"}
                >
                    <AccountMenu 
                        isLoggedIn={isLoggedIn} 
                        user={getUser()} 
                        handlefFuncs={{ 
                            toProfile: () => navigate("/profile"), 
                            onLogout: () => {
                                clearAuthData();
                                setIsLoggedIn(false);
                                navigate("/login");
                            },
                            onLogin: () => navigate("/login")
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Account;