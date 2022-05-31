import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_REPORTS_BY_USER_ID } from '../../../utils/queries';

function RPT_Preview() {
    // var data
    // const loading = true;
    const { loading, data } = useQuery(QUERY_REPORTS_BY_USER_ID,{variables: {sdafasdf: 'ttt'}});
    const reportsByUserId = data?.reportsByUserId || [1,2,3];
    
    if (loading) {
        return <div>Loading...</div>;
    }


    console.log (reportsByUserId);
    // {
    //     "_id": "62965ace7f1b0daa38cbf04c",
    //     "name": "zvczv",
    //     "photo": "7059683.jpg",
    //     "lastSeen": "zvczxcv"
    //   },

    // const reportsByUserId = [
    //     {
    //         "_id": "62965ace7f1b0daa38cbf04c",
    //         "name": "zvczv",
    //         "photo": "7059683.jpg",
    //         "lastSeen": "zvczxcv"
    //     },
    //     {
    //         "_id": "62956de45003468d6aa1746d",
    //         "name": "cvzxzsa",
    //         "photo": "7059683.jpg",
    //         "lastSeen": "bvcx"
    //     },
    //     {
    //         "_id": "62956da95003468d6aa17469",
    //         "name": "dgag",
    //         "photo": "7059683.jpg",
    //         "lastSeen": "gfsdfg"
    //     },
    //     {
    //         "_id": "629569293e9aa0dbb50810f8",
    //         "name": "resault",
    //         "photo": "7059683.jpg",
    //         "lastSeen": "a bear"
    //     }
    // ]

    return (





        <div className="RPT_Preview">
            {reportsByUserId.map((report) => (

                <a className="reportThumbnail">
                    <div className="report-preview-div">
                        <img src={report.photo} alt="lost pet" />
                        <h5>{report.name}</h5>
                        <h5>{report.lastSeen}</h5>
                    </div>
                </a>

            ))}
        </div>
    )
}

export default RPT_Preview;