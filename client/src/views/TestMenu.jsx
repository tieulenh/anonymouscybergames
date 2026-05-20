import { useState, useEffect } from "react";
const showMenu = (menus) => {
    if (!menus || menus.length === 0) return null;
    return (
        <ul>
            {menus.map(menu => (
                <li key={menu.id}>
                    <strong>{menu.title}</strong>
                    {showMenu(menu.children)}
                </li>
            ))}
        </ul>
    );
}

const TestMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        async function fetchMenus() {
            try {
                const response = await fetch("/api/menus");
                const data = await response.json();

                setMenus(data);

            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        }
        fetchMenus();
    }, []);

    return (
        <div>
            <h1>Test Menu</h1>
            {showMenu(menus)}
        </div>
    );
};

export default TestMenu;