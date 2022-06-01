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
        if (clickedNavIcon==="logout_info"){
            Auth.logout();            
        }
        else if(clickedNavIcon==="home"){
            clickedNavIcon=""
        }
        
        window.location.assign('/'+clickedNavIcon);
    };

    let tempArr = [];
    (Auth.loggedIn())
        ? tempArr = navBarChoices
        : tempArr = navBarChoicesNOT;

    return (
        <div className="mobile-navbar  navbar-div">
            {tempArr.map((view) => (
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
    )

}

export default Mobile;