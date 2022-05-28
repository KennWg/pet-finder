import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_VIEW } from '../../utils/actions';

import REPORT from '../../assets/images/REPORT.png';
import HOME from '../../assets/images/HOME.png';
import DASHBOARD from '../../assets/images/DASHBOARD.png';
import LOGIN from '../../assets/images/LOGIN.png';


function Tablet() {

    const [state, dispatch] = useStoreContext();
    const { currentView, navBarChoices } = state;
    console.log('NavBar Baby!', navBarChoices);

const imagePath = imageName => {
    return require(`../../assets/images/${imageName}.png`)
}

    const handleClick = async clickedNavIcon => {
        await dispatch({
            type: UPDATE_VIEW,
            currentView: clickedNavIcon
        })
        console.log('Clicked:', currentView);
    };


    return (
        <div className="tablet-navbar">
            {navBarChoices.map((view) => (
                <div
                    className={`tablet-nav-div`}
                    key={view.name}
                >
                    <a className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                        onClick={() => {
                            handleClick(view.name);

                        }}

                        href="#"
                        title={view.description}
                    >
                        <img src={imagePath(view.name)} className="tablet-nav-icon" alt={view.name} />
                    </a>
                </div>
            ))
            }


        </div >



    )

    return (

        <div className="tablet-navbar">
            <div>Make a Report</div>
            <div>Home</div>
            <div>My Dashboard</div>
            <div>Login / Sign Up</div>
        </div>
    );
}

export default Tablet;