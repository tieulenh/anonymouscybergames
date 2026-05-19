const AccountMenu = (
    { 
        isLoggedIn, 
        user,
        handlefFuncs,
        ...AccountMenuProps 
    }
) => {
    if (!isLoggedIn) {
        return (
            <div className="account_menu" {...AccountMenuProps}>
                <button onClick={handlefFuncs?.onLogin}>Login</button>
            </div>
        );
    }

    return (
        <div className="account_menu" {...AccountMenuProps}>
            <p>{(user.role || 'User') === "ADMIN" ? "Admin" : "User"}: {user.username || 'unknown'}</p>
            <button onClick={handlefFuncs?.toProfile}>Profile</button>
            <button onClick={handlefFuncs?.onLogout}>Logout</button>
        </div>
    );
};

export default AccountMenu