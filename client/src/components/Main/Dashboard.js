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
                <div>
                    <h4>MY REPORT</h4>
                </div>

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

            <section className="flex-row full-column flex-space-around">
                        <Link to="/create_report" className="custom-btn">FILE REPORT</Link>
                        <Link to="/all_reports" className="custom-btn">VIEW REPORTS</Link>
                        <Link to="/logout_info" className="custom-btn">LOGOUT</Link>
            </section>
        </div>
    );
}

export default Dashboard;