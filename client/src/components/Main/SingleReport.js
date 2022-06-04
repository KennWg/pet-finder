import React, { useReducer, useState } from "react";

import { anyInput } from '../../utils/helpers';


function SingleReport() {
    const [formState, setFormState] = useState({ name: '', breed: '', collarMicrochip: '', picForUpload: '', description: '', lastKnownLocation: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, breed, collarMicrochip, picForUpload, description, lastKnownLocation } = formState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('You hit the SUBMIT button');
        if (!errorMessage) {
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
            console.error('client/src/components/Main/SingleReport.js:Form - FORM ERROR -', e);
            alert('- FORM ERROR - (see console)');
        }
    }

    var petName = "Tom";
    var petDescription = "An adorable cat";
    var petComment = "I saw it last day";

    return (
        <div className="single-report-class  outer-div">

            <section>
                <h4 data-testid="h1tag">Report for {petName}</h4>
                <img src="" alt="lost pet" />
                <h5>{petName}</h5>

                <h5>{petDescription}</h5>

                <h6>{petComment}</h6>
            </section>

            <form>
                <textarea placeholder="Please leave a comment if you have any infomation of this lost pet"></textarea>
                <button type="submit"></button>
            </form>

        </div>
    )
}

export default SingleReport;