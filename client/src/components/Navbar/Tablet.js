import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

function Tablet() {

    const [state, dispatch] = useStoreContext();
    const { currentView, navBarChoices } = state;

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
}

export default Tablet;