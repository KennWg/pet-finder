import React, { useReducer, useState } from "react";

import { anyInput } from '../../utils/helpers';

import RPT_Preview from "./SubComponents/RPT_Preview";


function AllReports() {
    const [formState, setFormState] = useState({ name: '', breed: '', collarMicrochip: '', picForUpload: '', description: '', lastKnownLocation: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, breed, collarMicrochip, picForUpload, description, lastKnownLocation } = formState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('You hit the SUBMIT button');
        if (!errorMessage) {
            // setFormData({ [e.target.name]: e.target.value });
            // console.log('client/src/components/Main/AllReports.js:Form - NO ERROR - ', formData);
        }

        try {
            // const response = await createUser({
            //     variables: { ...formData }
            // });

            // if (!response.ok) {
            //   throw new Error('something went wrong!');
            // }

            // const { token, user } = await response.json();
            // console.log(user);
            // Auth.login(token);
        } catch (e) {
            console.error('client/src/components/Main/AllReports.js:Form - FORM ERROR -', e);
            alert('- FORM ERROR - (see console)');
        }
    }

    var petName = "Tom";
    var petDescription = "An adorable cat";
    var petComment = "I saw it last day";

    const reportsObj = [
        {
            petName: petName,
            petImg: petComment
        },
        {
            petName: petName,
            petImg: petComment
        },
        {
            petName: petName,
            petImg: petComment
        },
        {
            petName: petName,
            petImg: petComment
        }
    ]

    return (
        <div>
            <span>All Reports:</span>
        <section className="sub-comp-section">
            <RPT_Preview />
        </section>
        </div>

    )
}

export default AllReports;