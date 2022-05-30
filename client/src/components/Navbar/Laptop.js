import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

import Auth from '../../utils/auth.js';

function Laptop() {

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
    let tempArr = [];
    (!Auth.loggedIn())
        ? tempArr = navBarChoices
        : tempArr = navBarChoicesNOT;

    return (
        <div className="laptop-navbar navbar-div">
            {tempArr.map((view) => (
                <div className={`laptop-nav-div`}
                    key={view.name}>
                    <a className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                        onClick={() => {
                            handleClick(view.name);
                        }}
                        href="#"
                        title={view.description}>
                        <img src={imagePath(view.name)} className="laptop-nav-icon" alt={view.name} />
                    </a>
                </div>
            ))
            }
        </div >
    )
}

export default Laptop;