import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

import Auth from '../../utils/auth.js';

function Tablet() {

    const [state, dispatch] = useStoreContext();
    const { currentView, navBarChoices, navBarChoicesNOT } = state;

    const imagePath = imageName => {
        return require(`../../assets/images/${imageName}.png`)
    }

    const handleClick = async clickedNavIcon => {
        if (clickedNavIcon==="LOGOUT"){
            Auth.logout();            
        }
        
        await dispatch({
            type: UPDATE_VIEW,
            currentView: clickedNavIcon
        })
    };

    let tempArr = [];
    (Auth.loggedIn())
        ? tempArr = navBarChoices
        : tempArr = navBarChoicesNOT;

    return (
        <div className="tablet-navbar navbar-div">
            {tempArr.map((view) => (
                <div className={`tablet-nav-div`}
                    key={view.name}>
                    <a className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                        onClick={() => {
                            handleClick(view.name);
                        }}
                        href="#"
                        title={view.description}>
                        <img src={imagePath(view.name)} className="tablet-nav-icon" alt={view.name} />
                    </a>
                </div>
            ))
            }
        </div >
    )
}

export default Tablet;