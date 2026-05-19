import SearchBar from "./searchbar";
import Account from "./account/Account";
import logo from '../assets/logo512x512.png'

const Header = ({ toggleSidebar }) => {

    return (

        <header 
            className="header"
            style={
                {
                    borderBottom: "2px solid blue"
                }
            }
        >

            {/* LEFT */}

            <div className="header-left">

                <button
                    className="menu-btn"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>
                <a
                    href="/"
                    className="logo"
                    style={
                        {
                            color: "red"
                        }
                    }
                >
                    ACG
                </a>

            </div>

            {/* CENTER */}

            <div className="header-center">

            </div>

            {/* RIGHT */}

            <div className="header-right">
                <SearchBar  />
                <div style={{margin: "0 32px 0 0"}}></div>
                <Account className={'abc'}/>

            </div>

        </header>
    );
}

export default Header;