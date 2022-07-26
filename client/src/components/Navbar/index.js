
import Laptop from './Laptop.js';
import Tablet from './Tablet.js';
import Mobile from './Mobile.js';

function Navbar() {

    const menu = {
        menuClosed: {
            visibility: "hidden",
            opacity: "0%",
            // width: "0px",
            // height: "0px",
            transition: "0.3s ease-in"
        },

        menuOpen: {
            visibility: "visible",
            opacity: "100%",
            transition: "0.3s ease-in"

        }
    }

    return (
        <div className="navbar-class">
            <Laptop {...menu} />
            <Tablet {...menu} />
            <Mobile {...menu}/>
        </div>
    );
}

export default Navbar;