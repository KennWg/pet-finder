import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

function Dashboard() {

    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || [];

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(me);

    return (
        <div className="dashboard-class">

            <div className="outer-div body-bg-color">

                <section className="flex-row flex-space-around">
                    <Link to="/create_report" className="custom-btn">FILE REPORT</Link>
                    <Link to="/all_reports" className="custom-btn">VIEW REPORTS</Link>
                    <Link to="/logout_info" className="custom-btn">LOGOUT</Link>
                </section>

                <br></br>

                {me.slice(0, 1).map((report) => (
                    <Link to={"/single_report/" + report._id} className="">
                        <div key={report._id + "anchorTag"} datavalue={report._id} className="reportThumbnail dash-sub-comp-outer-div brand-bg-color">

                            <div key={report._id + "sub-comp-inner-div"} className="rpt-dashboard-div dash-sub-comp-inner-div">

                                <div className="upper-dash-comp">
                                    <img key={report._id + "img"} src={report.photo} alt={report.name + ", a lost pet"} />
                                </div>

                                <div className="lower-dash-comp">
                                    <h1 className="poster-title">MISSING</h1>

                                    <p key={report._id + report.name + "5"} className="rpt-dashboard-pet-name">{report.name}</p>

                                    <p className="body-text">has been missing since:</p>
                                    <p key={report._id + report.lastSeen + "6"} className="body-text rpt-dashboard-last-seen">{report.lastSeen}</p>
                                    <p key={report._id + report.description} className="body-text rpt-dashboard-description">{report.description}</p>

                                    <div>
                                        <p key={report._id + report.createdAt} className="body-text">This report was created on:<br></br><b>{report.createdAt}</b></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Link>

                ))}

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Dashboard;