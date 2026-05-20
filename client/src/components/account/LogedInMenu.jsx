const LogedInMenu = (
    { 
        isLoggedIn, 
        user,
        handlefFuncs,
        className,
        styleModule,
        ...props 
    }
) => {
    if (!isLoggedIn) {
        return null;
        // (
        //     <div 
        //         className={`loged-in_menu ${className || ''} ${styleModule?.loged_in_menu || ''}`} 
        //         {...props}
        //     >
        //         <button onClick={handlefFuncs?.onLogin}>Login</button>
        //     </div>
        // );
    }

    return (
        <div 
            className={`loged-in_menu ${className || ''} ${styleModule?.loged_in_menu || ''}`} 
            {...props}
        >
            <p>{(user.role || 'User') === "ADMIN" ? "Admin" : "User"}: {user.username || 'unknown'}</p>
            <button onClick={handlefFuncs?.toProfile}>Profile</button>
            <button onClick={handlefFuncs?.onLogout}>Logout</button>
        </div>
    );
};

export default LogedInMenu;