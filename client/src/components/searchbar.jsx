import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";


const SearchBar = () => {

    const [open, setOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    return (

        <div ref={searchRef} className="search-wrapper">

            {/* DESKTOP */}

            <div className="search-bar desktop-search">

                <input
                    type="text"
                    placeholder="Search games..."
                />

                <button className="search-btn">
                    <Search size={18} />
                </button>

            </div>

            {/* MOBILE ICON */}

            <button
                className="mobile-search-btn"
                onClick={() => setOpen(prev => !prev)}
            >
                <Search size={20} />
            </button>

            {/* MOBILE PANEL */}

            {open && (

                <div className="mobile-search-panel">

                    <div className="search-bar mobile-search">

                        <input
                            type="text"
                            placeholder="Search games..."
                            autoFocus
                        />

                        <button className="search-btn">
                            <Search size={18} />
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
};

export default SearchBar;