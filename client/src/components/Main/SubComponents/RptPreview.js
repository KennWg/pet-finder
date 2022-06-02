import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_REPORTS } from '../../../utils/queries';

function RptPreview() {
    // var data
    // const loading = true;
    const { loading, data } = useQuery(QUERY_ALL_REPORTS, { variables: { sdafasdf: 'ttt' } });
    const allReports = data?.allReports || [];

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
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
        </>

    )
}

export default RptPreview;