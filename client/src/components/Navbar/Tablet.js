import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_VIEW } from '../../utils/actions';




function Tablet() {

    const [state, dispatch] = useStoreContext();
    const { currentView, navBarChoices } = state;
    console.log('NavBar Baby!', navBarChoices);


    const handleClick = async id => {
        await dispatch({
            type: UPDATE_VIEW,
            currentView: id
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
                        {view.name}
                        {/* <img src="/src/assets/images/" {view.name} className="mobile-nav-icon" alt="make a report icon" /> */}
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