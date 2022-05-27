import Home from './Home.js';
import Login from './Login.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Report from '../Dashboard/Report.js';
import SignUp from './SignUp.js';
import SingleReport from './';
import AllReports from './';

import { useStoreContext } from '../../utils/GlobalState';


function Main() {
    const [state, dispatch] = useStoreContext();
    const { currentView } = state;
    console.log('Oh Baby!', state);

    return (
        <main className="">
            {currentView === 'HOME' && <Home />}
            {currentView === 'DASHBOARD' && <Dashboard />}
            {currentView === 'LOGIN' && <Login />}
            {currentView === 'SIGNUP' && <SignUp />}
            {currentView === 'REPORT' && <Report />}
            {currentView === 'VIEW REPORT' && <SingleReport />}
            {currentView === 'All REPORTS' && <AllReports />}
        </main>
    )
}
export default Main