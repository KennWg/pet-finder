import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

import Auth from '../../utils/auth.js';

// import report from '../../assets/images/REPORT.png';
// import home from '../../assets/images/HOME.png';
// import dashboard from '../../assets/images/DASHBOARD.png';
// import login from '../../assets/images/LOGIN.png';


function Mobile() {
    
    const [state, dispatch] = useStoreContext();
    const { currentView, navBarChoices, navBarChoicesNOT } = state;

    const imagePath = imageName => {
        return require(`../../assets/images/${imageName}.png`)
    }

    const handleClick = async clickedNavIcon => {
        await dispatch({
            type: UPDATE_VIEW,
            currentView: clickedNavIcon
        })
    };

    return (
        <>
            {(Auth.loggedIn())
                ? <div className="mobile-navbar">
                    {navBarChoices.map((view) => (
                        <div className={`mobile-nav-div`}
                            key={view.name}>
                            <a className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                                onClick={() => {
                                    handleClick(view.name);
                                }}
                                href="#"
                                title={view.description}>
                                <img src={imagePath(view.name)} className="mobile-nav-icon" alt={view.name} />
                            </a>
                        </div>
                    ))
                    }

                </div >

                : <div className="mobile-navbar">
                    {navBarChoicesNOT.map((view) => (
                        <div className={`mobile-nav-div`}
                            key={view.name}>
                            <a className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                                onClick={() => {
                                    handleClick(view.name);
                                }}
                                href="#"
                                title={view.description}>
                                <img src={imagePath(view.name)} className="mobile-nav-icon" alt={view.name} />
                            </a>
                        </div>
                    ))
                    }

                </div >}
        </>


    )

}

export default Mobile;