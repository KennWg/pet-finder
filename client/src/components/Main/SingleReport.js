import React, { useReducer, useState } from "react";
import { useParams } from 'react-router-dom';
import GMap from './SubComponents/GMap'
import { anyInput } from '../../utils/helpers';
import { useQuery } from '@apollo/client';
import { REPORT_BY_REPORT_ID } from '../../utils/queries';

import RptPreview from "./SubComponents/RptPreview";


function SingleReport() {
    const { id } = useParams();

    console.log("REPORT-ID: ", id);

    const { loading, data } = useQuery(REPORT_BY_REPORT_ID, { variables: { "id": id } });
    const report = data?.report || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(report);
    const { _id, name, breed, photo, description, lastSeen, createdAt, createdBy } = report;
    const { username, email } = createdBy;

    return (


        <div className="single-report-class "> 

            <div key={report._id + "anchorTag"} datavalue={report._id} className="single-report outer-div ">

                <div key={report._id + "sub-comp-inner-div"} className="body-bg-color singleReport-sub-comp-inner-div">
                <h5>_id{_id}</h5>

                    <div className="upper-singleReport-comp">
                        <img key={report._id + "img"} src={report.photo} alt={report.name + ", a lost pet"} />
                    </div>
                    <GMap petName={name} rptId={_id} />

                    <div className="lower-singleReport-comp">

                        <p key={report._id + report.name + "5"} className="rpt-singleReportboard-pet-name">{report.name}</p>

                        <p key={report._id + report.lastSeen + "6"} className="body-text rpt-singleReportboard-last-seen">{report.lastSeen}</p>
                        <p key={report._id + report.description} className="body-text rpt-singleReportboard-description">{report.description}</p>

                        <div>
                            <p key={report._id + report.createdAt} className="body-text">This report was created on:<br></br><b>{report.createdAt}</b></p>
                        </div>

                    </div>
                </div>

            </div>
            <h5>name{name}</h5>
            <h5>breed{breed}</h5>
            <h5>photo{photo}</h5>
            <h5>description{description}</h5>
            <h5>lastSeen{lastSeen}</h5>
            <h5>createdAt{createdAt}</h5>
            <h5>username{username}</h5>
            <h5>email{email}</h5>



        </div>
    )
}

export default SingleReport;