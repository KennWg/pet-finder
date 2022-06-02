import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dogImg from '../../assets/images/dog.jpg';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_REPORTS } from '../../utils/queries';


import RptPreview from './SubComponents/RptPreview';

function Dashboard() {

    const { loading, data } = useQuery(QUERY_ALL_REPORTS, { variables: { sdafasdf: 'ttt' } });
    const allReports = data?.allReports || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-class outer-div body-bg-color">
            <div>
                {allReports.map((report) => (
                    <a key={report._id + "anchorTag"} datavalue={report._id} className="reportThumbnail sub-comp-outer-div brand-bg-color">
                        <div key={report._id + "sub-comp-inner-div"} className="rpt-preview-div sub-comp-inner-div">
                            <img key={report._id + "img"} src={report.photo} alt={report.name + ", a lost pet"} />
                            <div key={report._id + "details"} className="rpt-preview-text-div">
                                <p key={report._id + report.name + "5"} className="rpt-preview-pet-name">{report.name}</p>
                                <p key={report._id + report.lastSeen + "6"} className="rpt-preview-last-seen"><strong>Last seen: </strong> {report.lastSeen}</p>
                            </div>
                        </div>
                    </a>

                ))}
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