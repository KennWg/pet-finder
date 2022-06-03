
import Laptop from './Laptop.js';
import Tablet from './Tablet.js';
import Mobile from './Mobile.js';

function Navbar() {
    return (

        <div className="navbar-class">
            <Laptop />
            <Tablet />
            <Mobile />
        </div>
    );
}

export default Navbar;