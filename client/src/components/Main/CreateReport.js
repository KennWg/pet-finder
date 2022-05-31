import React, { useState } from 'react';
import axios from 'axios';

import { anyInput } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { CREATE_REPORT } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

function CreateReport() {
    const [formState, setFormState] = useState({ name: '', breed: '', picForUpload: '', description: '', lastSeen: '', photo: '', createdBy: '' });
    const { name, breed, picForUpload, description, lastSeen, photo } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    const [createReport, { error }] = useMutation(CREATE_REPORT);

    const [upload, setUpload] = useState(true);




    const extraHelper = () => {
        const { _id } = Auth.getProfile().data
        setFormState({ ...formState, createdBy: _id });
        console.log('------------=====> ', _id)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        extraHelper();

        if (errorMessage) {
            // setFormData({ [e.target.name]: e.target.value });
            console.log('client/src/components/Main/CreateReport.js:Form - NO ERROR - ', formState);
            return;
        }

        if (!errorMessage) {
            console.log('Submit Form', formState);

            //Image submission

            const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

            const imageData = new FormData();
            imageData.append('file', photo);
            imageData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
            // console.log('before axios');
            // const response = await axios.post(url, imageData);
            // console.log('after axios');
        }


        try {
            console.log("TRYING CreateReport", formState);
            const { data } = await createReport({
                variables: { ...formState }
            });
            console.log("try COMPLETED");
            console.log('CREATE_REPORT server response: ',data)

            if (!data) {
                throw new Error('response was not "OK" something went wrong! -- In CreateReport');
            }
            // The following code is not being used to do anything.  It simply generates errors:
            // else {
            //     const { token, user } = data.addReport;
            //     console.log(user);
            //     console.log(token);
            //     Auth.loggedIn(token);
            // }

        } catch (e) {
            console.error('client/src/components/Main/CreateReport.js:Form - FORM ERROR -', e);
            console.log("Mutation error :", error);

            // alert('- FORM ERROR - (see console)');
        }







        setFormState({ name: '', breed: '', picForUpload: '', description: '', lastSeen: '', photo: '', createdBy: '' });
        setUpload(true);
    };

    const handleChange = ({ target }) => {
        const inputName = target.name;
        const inputValue = target.value;

        switch (inputName) {
            case 'name':
            case 'picForUpload':
            case 'lastSeen':
                (!anyInput(inputValue))
                    ? setErrorMessage(`${inputName} is required.`)
                    : setErrorMessage('');
                if (inputName === 'picForUpload') {
                    setUpload(false);
                }
                break;

            default:
                break;
        }
        if (!errorMessage) {
            if (inputName === 'picForUpload') {
                // photo: target.files[0].name  <---- This is temporary until we get a Cloudinary link
                setFormState({ ...formState, [target.name]: URL.createObjectURL(target.files[0]), photo: target.files[0].name });
            } else {
                setFormState({ ...formState, [target.name]: target.value });
                // console.log('client/../CreateReport.js:handleChange: formState=', formState);
            }
        }
    };



    return (
        <div className="create-report-class outer-div">
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

                <div className="">{upload ? (<label className="input-file-label" for="picForUpload" >Upload Photo
                    <input id="picForUpload" className="input-file" placeholder="Upload a picture" type="file" accept="image/*" name="picForUpload" onChange={handleChange} />
                </label>) : (<a onClick={setUpload}><img id="upload-thumbnail" src={picForUpload} ></img></a>)}

                </div>

                <div className="">
                    <input className="" placeholder="Description" value={description} type="text" name="description" onChange={handleChange} />
                </div>

                <div className="">
                    <input className="" placeholder="Last known location" value={lastSeen} type="text" name="lastSeen" onChange={handleChange} />
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