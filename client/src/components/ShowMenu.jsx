import { FilePen } from "lucide-react";

const ShowMenu = ({menus}) => {
    if (!menus || menus.length === 0) return null;
    return (
        <div>
            <ul>
                {menus.map(menu => (
                    <li key={menu.id ? menu.id : null}>
                        <a href={menu.path || '#'} >
                            {menu.title ? menu.title : 'unknown'}
                        </a>
                        {<ShowMenu menus= {menu.children} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowMenu;