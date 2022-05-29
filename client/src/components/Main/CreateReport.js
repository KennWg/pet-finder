import React, { useState } from 'react';

import { anyInput } from '../../utils/helpers';


function CreateReport() {
    const [formState, setFormState] = useState({ name: '', breed: '', collarMicrochip: '', picForUpload: '', description: '', lastKnownLocation: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, breed, collarMicrochip, picForUpload, description, lastKnownLocation } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = ({ target }) => {
        const inputName = target.name;
        const inputValue = target.value;

        switch (inputName) {
            case 'name':
            case 'picForUpload':
            case 'lastKnownLocation':
                (!anyInput(inputValue))
                    ? setErrorMessage(`${inputName} is required.`)
                    : setErrorMessage('');
                break;
            default:
                break;
        }
        if (!errorMessage) {

            setFormState({ ...formState, [target.name]: target.value });
            console.log('client/../CreateReport.js:handleChange: formState=', formState);
        }
    };

    return (
        <div className="signup-class">
            <h4 data-testid="h1tag">File a Missing Pet Report</h4>
            <h5>Please provide all the details that could help in locating the missing pet.</h5>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>Your email will be kept confidential. </p>

            <form className="missing-pet-report" id="missing-pet-report" onSubmit={handleSubmit}>

                <div className="">
                    <input className="" placeholder="Name" value={name} type="text" name="name" onChange={handleChange} />
                </div>

                <div className="">
                    <input className="" placeholder="Breed" value={breed} type="text" name="breed" onChange={handleChange} />
                </div>

                <div className="">
                    <label className="input-file-label" for="picForUpload" >Upload Photo
                        <input id="picForUpload" className="input-file" placeholder="Upload a picture" type="file" accept="image/*" name="picForUpload" onChange={handleChange} />
                    </label>
                </div>

                <div className="">
                    <input className="" placeholder="Collar or Microchip" value={collarMicrochip} type="text" name="collarMicrochip" onChange={handleChange} />
                </div>

                <div className="">
                    <input className="" placeholder="Description" value={description} type="text" name="description" onChange={handleChange} />
                </div>

                <div className="">
                    <input className="" placeholder="Last known location" value={lastKnownLocation} type="text" name="lastKnownLocation" onChange={handleChange} />
                </div>

                <div className="">
                    <button className="" type="submit">Submit <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}


            </form>



        </div>
    );
}

export default CreateReport;