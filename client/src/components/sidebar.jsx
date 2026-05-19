import { useState } from "react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "About", path: "/about" },
];

const forAdmin = [
    { name: "Manage Games", path: "/manage/games" },
    { name: "Manage Accounts", path: "/manage/accounts" },
];

function Sidebar({ isOpen, closeSidebar }) {
    const role = localStorage.getItem("role");

    const [manageOpen, setManageOpen] = useState(false);

    return (
        <>
            {/* OVERLAY */}
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={closeSidebar}
                />
            )}

            {/* SIDEBAR */}
            <div className={isOpen ? "sidebar open" : "sidebar"}>

                {/* HEADER */}
                <div className="sidebar-header">
                    <h4>Menu</h4>
                    <button className="close-btn" onClick={closeSidebar}>
                        ✕
                    </button>
                </div>

                {/* NORMAL LINKS */}
                {navLinks.map((link) => (
                    <a
                        key={link.path}
                        href={link.path}
                        onClick={closeSidebar}
                    >
                        {link.name}
                    </a>
                ))}

                {/* ADMIN MENU */}
                {role === "ADMIN" && (
                    <div className="manage-section">

                        <div
                            className="manage-title"
                            onClick={() => setManageOpen(!manageOpen)}
                        >
                            Manage ▼
                        </div>

                        {manageOpen && (
                            <div className="manage-submenu">
                                {forAdmin.map((item) => (
                                    <a
                                        key={item.path}
                                        href={item.path}
                                        onClick={closeSidebar}
                                    >
                                        {item.name}
                                    </a>
                                ))} 

                            </div>
                        )}
                    </div>
                )}

            </div>
        </>
    );
}

export default Sidebar;
export { navLinks, forAdmin };