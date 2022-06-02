import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dogImg from '../../assets/images/dog.jpg';

import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

import RptPreview from './SubComponents/RptPreview';

function Dashboard() {

    const { users } = useStoreContext();
    const [state, dispatch] = useStoreContext();

    const highlightStyle = {
        color: 'red',
        fontWeight: 'bold'
    };

    const imgStyle = {
        height: '200px'
    }

    const handleClick = async ({ target }) => {
        console.log(target.value)
        await dispatch({
            type: UPDATE_VIEW,
            currentView: target.value
        })
    };

    return (
        <div className="dashboard-class outer-div body-bg-color">

            <section>
                <form className="row">

                    {/* {users.map((user) => (
                            <h3 key={user.username}>
                                Welcome, {user.username}
                            </h3>
                        ))} */}

                    <button className="btn btn-primary" data-testid="button" type="submit">Create a Report</button>
                    <Link to="/all_reports">All Reports</Link>
                    <button className="btn btn-primary" data-testid="button" type="submit" value="VIEW REPORT" onClick={handleClick}>SingleReport</button>
                    <button className="btn btn-primary" data-testid="button" type="submit">Logout</button>
                    <button className="btn btn-primary" data-testid="button" type="submit" style={highlightStyle}>Delete Account</button>
                </form>
            </section>



            <section className="my-report">
                <div>
                    <h4>Reports I have commented on</h4>
                </div>

                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </section>

        </div>
    );
}

export default Dashboard;