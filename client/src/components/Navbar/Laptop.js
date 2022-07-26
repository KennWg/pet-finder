import { useStoreContext } from '../../utils/GlobalStore';
import React, { useState } from 'react';
import menuIcon from '../../assets/images/nav_menu.png';
import Auth from '../../utils/auth.js';
let navbarVisible = false;

function Laptop(props) {

    const [navbarStyle, setNavbarStyle] = useState(props.menuClosed);

    const toggleNavMenu = () => {
        navbarVisible = !navbarVisible;
        (navbarVisible) ? setNavbarStyle(props.menuOpen) : setNavbarStyle(props.menuClosed);
        console.log(navbarStyle);
    }

    const [state, dispatch] = useStoreContext();
    const { currentView, navBarChoices, navBarChoicesNOT } = state;

    const imagePath = imageName => {
        return require(`../../assets/images/${imageName}.png`)
    }

    const handleClick = async clickedNavIcon => {
        if (clickedNavIcon === "logout_info") {
            Auth.logout();
        }
        else if (clickedNavIcon === "home") {
            clickedNavIcon = ""
        }

        window.location.assign('/' + clickedNavIcon);
    };

    let tempArr = [];
    (Auth.loggedIn())
        ? tempArr = navBarChoices
        : tempArr = navBarChoicesNOT;

    return (
        <div>
            <div className={`laptop-nav-div`} style={{ position: "absolute", top: "1vh", right: "1.6vw" }} onClick={toggleNavMenu}>
                <img src={menuIcon} className="menu-icon laptop-nav-icon" />
            </div>
            <div className="laptop-navbar navbar-div" style={navbarStyle}>
                {tempArr.map((view) => (
                    <div className={`laptop-nav-div`}
                        key={view.name}>
                        <span className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                            onClick={() => {
                                handleClick(view.name);
                            }}
                            // href="#"
                            title={view.description}>
                            <img src={imagePath(view.name)} className="laptop-nav-icon" alt={view.name} />
                        </span>
                    </div>
                ))
                }
            </div >
        </div>
    )
}

export default Laptop;