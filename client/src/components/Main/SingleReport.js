import React, { useReducer, useState } from "react";
import { useParams } from 'react-router-dom';
import Map from './SubComponents/googleMap.js'
import { anyInput } from '../../utils/helpers';
import { useQuery } from '@apollo/client';
import { REPORT_BY_REPORT_ID } from '../../utils/queries';




function SingleReport() {
    const { id } = useParams();

    console.log("REPORT-ID: ", id);

    const { loading, data } = useQuery(REPORT_BY_REPORT_ID, { variables: { "id": id } });
    const report = data?.report || [];

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(report);
    const {name, breed, photo, description, lastSeen, createdAt, createdBy } = report;
    const { username, email } = createdBy;
    return (


        <div className="single-report-class  outer-div">

                <div>name{name}</div>
                <div>breed{breed}</div>
                <div>photo{photo}</div>
                <div>description{description}</div>
                <div>lastSeen{lastSeen}</div>
                <div>createdAt{createdAt}</div>
                <div>username{username}</div>
                <div>email{email}</div>


        </div>
    )
}

export default SingleReport;