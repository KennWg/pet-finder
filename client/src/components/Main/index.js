import Home from './Home.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Report from './CreateReport.js';
import SignUp from './SignUp.js';
import SingleReport from './SingleReport';
import AllReports from './AllReports';
import LogoutInfo from './LogoutInfo.js';

import { useStoreContext } from '../../utils/GlobalStore';


function Main() {
    const [state, dispatch] = useStoreContext();
    const { currentView } = state;

    return (
        <main className="main-class">
            {currentView === 'HOME' && <Home />}
            {currentView === 'DASHBOARD' && <Dashboard />}
            {currentView === 'LOGIN' && <Login />}
            {currentView === 'LOGOUT' && <LogoutInfo />}
            {currentView === 'SIGNUP' && <SignUp />}
            {currentView === 'REPORT' && <Report />}
            {currentView === 'VIEW REPORT' && <SingleReport />}
            {currentView === 'ALL REPORTS' && <AllReports />}
        </main>
    )
}
export default Main