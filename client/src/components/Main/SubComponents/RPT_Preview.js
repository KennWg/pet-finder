import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_REPORTS_BY_USER_ID } from '../../../utils/queries';

const fillerData = [
    {
        "_id": "62965ace7f1b0daa38cbf04c",
        "name": "Dawson",
        "photo": "7059683.jpg",
        "lastSeen": "zvczxcv"
    },
    {
        "_id": "62956de45003468d6aa1746d",
        "name": "Kindric",
        "photo": "7059683.jpg",
        "lastSeen": "bvcx"
    },
    {
        "_id": "62956da95003468d6aa17469",
        "name": "Holly",
        "photo": "7059683.jpg",
        "lastSeen": "gfsdfg"
    },
    {
        "_id": "629569293e9aa0dbb50810f8",
        "name": "Charlie",
        "photo": "7059683.jpg",
        "lastSeen": "Walking in the park near the church at davisville and eglington - a bear"
    }
]

function RPT_Preview() {
    // var data
    // const loading = true;
    const { loading, data } = useQuery(QUERY_REPORTS_BY_USER_ID, { variables: { sdafasdf: 'ttt' } });
    const reportsByUserId = data?.reportsByUserId || fillerData;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
    <>
                {reportsByUserId.map((report) => (
                <a key={report._id} data-key-value={report._id} className="reportThumbnail sub-comp-outer-div brand-bg-color">
                    <div className="rpt-preview-div sub-comp-inner-div">
                        <img src={report.photo} alt="a picture of a lost pet" />
                        <div className="rpt-preview-text-div">
                        <p className="rpt-preview-pet-name">{report.name}</p>
                        <p className="rpt-preview-last-seen"><strong>Last seen: </strong> {report.lastSeen}</p>
                        </div>
                    </div>
                </a>

            ))}
    </>

    )
}

export default RPT_Preview;