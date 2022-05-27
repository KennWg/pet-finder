import Login from './login.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Report from '../Dashboard/Report.js';
import SignUp from './SignUp.js';
import SingleReport from './';
import AllReports from './';

import { useStateContext } from '../../utils/Contexts';


function Main() {
const {currentView} = useStateContext();

    console.log('Oh Baby!', currentView);

    return (
        <main className="">
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