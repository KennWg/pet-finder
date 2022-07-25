import { useStoreContext } from '../../utils/GlobalStore';
import React, { useState } from 'react';
import menuIcon from '../../assets/images/nav_menu.png';
import { UPDATE_VIEW } from '../../utils/actions';

import Auth from '../../utils/auth.js';
let navbarVisible = false;

function Laptop() {

    const menuClosed = {
        visibility: "hidden",
        border: "3px solid yellow"
    }

    const menuOpen = {
        visibility: "visible",
        border: "3px solid blue"
    }

    console.log("before");
    const [navbarStyle, setNavbarStyle] = useState(menuClosed);

    console.log(navbarStyle);
    console.log("after");



    const toggleNavMenu = () => {
        console.log("1", navbarVisible);

        navbarVisible = !navbarVisible;
        console.log("2", navbarVisible);

        (navbarVisible) ? setNavbarStyle(menuOpen) : setNavbarStyle(menuClosed);
        console.log(navbarStyle);
        console.log("3", navbarVisible);

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
                <img src={menuIcon} className="menu-icon laptop-nav-icon" style={{ border: "3px dotted green" }} />
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