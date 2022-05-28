import report from '../../assets/images/REPORT.png';
import home from '../../assets/images/HOME.png';
import dashboard from '../../assets/images/DASHBOARD.png';
import login from '../../assets/images/LOGIN.png';




function Mobile() {
    return (

        <div className="mobile-navbar">
            <div className="mobile-nav-div">REPORT<img src={report} className="mobile-nav-icon" alt="make a report icon" /></div>
            <div className="mobile-nav-div">HOME<img src={home} className="mobile-nav-icon" alt="navigate home icon" /></div>
            <div className="mobile-nav-div">DASHBOARD<img src={dashboard} className="mobile-nav-icon" alt="navigate dashboard icon" /></div>
            <div className="mobile-nav-div">SIGN UP<img src={login} className="mobile-nav-icon" alt="login or sign-up icon" />LOGIN</div>
        </div>
    );
}

export default Mobile;