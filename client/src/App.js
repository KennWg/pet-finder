import './App.css';
import { StateProvider } from './utils/Contexts';

import Navbar from './components/Navbar/';
import Header from './components/Header/Header.js';
import SignUp from './components/Main/SignUp.js';
import Login from './components/Main/Login.js';
import Placeholder from './components/Placeholder.js';
import createReport from './components/Dashboard/createReport';
import Dashboard from './components/Dashboard/Dashboard.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (<div className="site-container">
    <StateProvider>
        <Navbar />
        <Header />
        {/* <SignUp />
        <Report /> */}
        <Dashboard />
        {/* <Login /> */}
        {/* <Placeholder /> */}
        <Footer />
    </StateProvider>
  </div>

  );
}

export default App;
