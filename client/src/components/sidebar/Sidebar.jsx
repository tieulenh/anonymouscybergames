import { useState, useEffect } from "react";
import { getUser, getSideMenu, saveSideMenu } from "../../utils/localstorage";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "About", path: "/about" },
];

const forAdmin = [
    { name: "Manage Games", path: "/manage/games" },
    { name: "Manage Accounts", path: "/manage/accounts" },
];

import ShowMenu from "../ShowMenu";

import styles from "./Sidebar.module.scss";

function Sidebar({ isOpen, closeSidebar }) {
    const [manageOpen, setManageOpen] = useState(false);
    useEffect(() => {
        async function fetchSideMenu() {
            if(!getSideMenu()) {
                try {
                    const response = await fetch("/api/menus/sideMenu",{
                        method: "GET"
                    });
                    const data = await response.json();
                    console.log("Side menu:", data);
                    saveSideMenu(data);
                } catch (error) {
                    console.error("Error fetching menu:", error);
                }
            }
        }
        fetchSideMenu();
    }, []);

    return (
        isOpen && (
            <>
                <div className={isOpen ? "sidebar open" : "sidebar"}>
                    {/* HEADER */}
                    <div className="sidebar-header">
                        <h4>Menu</h4>
                        <button className="close-btn" onClick={closeSidebar}>
                            ✕
                        </button>
                    </div>

                    {/* NORMAL LINKS */}
                    <ShowMenu menus={getSideMenu()?.children || []} />

                    <a href="/testMenu">Test menu</a>

                    {/* ADMIN MENU */}
                    {getUser()?.role === "ADMIN" && (
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
        )
    );
}

export default Sidebar;
export { navLinks, forAdmin };