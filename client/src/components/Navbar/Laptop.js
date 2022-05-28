import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_VIEW } from '../../utils/actions';

function Laptop() {

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
        <div className="laptop-navbar">
            {navBarChoices.map((view) => (
                <div
                    className={`laptop-nav-div`}
                    key={view.name}
                >
                    <a className={`nav-link ${currentView === view.name ? 'active' : ''}`}
                        onClick={() => {
                            handleClick(view.name);

                        }}

                        href="#"
                        title={view.description}
                    >
                        <img src={imagePath(view.name)} className="laptop-nav-icon" alt={view.name} />
                    </a>
                </div>
            ))
            }

        </div >

    )
}

export default Laptop;