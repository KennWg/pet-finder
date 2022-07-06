import React, { useState } from 'react';
import axios from 'axios';


import { anyInput } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { CREATE_REPORT } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';


function CreateReport() {
    const [state, dispatch] = useStoreContext();

    const [formState, setFormState] = useState({ name: '', breed: '', picture: '', description: '', lastSeen: '', createdBy: '' });

    const [imageState, setImageState] = useState({ image: '' });

    const { name, breed, description, lastSeen, picture } = formState;

    const { image } = imageState;

    const [errorMessage, setErrorMessage] = useState('');

    const [createReport, { error }] = useMutation(CREATE_REPORT);

    const [upload, setUpload] = useState(true);

    console.log('pop',process.env.PET_ALERT_GOOGLE_MAPS_API_KEY)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errorMessage) {
            return;
        }

        if (!errorMessage) {
            console.log('Submit Form', formState);
        }


        try {
            //Image submission

            const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

            const imageData = new FormData();
            imageData.append('file', image);
            imageData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
            const response = await axios.post(url, imageData)

            const pictureURL = response.data.url;

            console.log("TRYING CreateReport", formState);
            const { data } = await createReport({
                variables: { ...formState, photo: pictureURL }
            });
            console.log("try COMPLETED");
            console.log('CREATE_REPORT server response: ', data)

            if (!data) {
                throw new Error('response was not "OK" something went wrong! -- In CreateReport');
            }


        } catch (e) {
            console.error('client/src/components/Main/CreateReport.js:Form - FORM ERROR -', e);
            console.log("Mutation error :", error);

            alert('A name, picture, description and a last known location are all required.');
        }

        setFormState({ name: '', breed: '', picture: '', description: '', lastSeen: '', createdBy: '' });
        setUpload(true);



        window.location.assign('/dashboard');

    };

    const handleChange = ({ target }) => {
        const inputName = target.name;
        const inputValue = target.value;

        switch (inputName) {
            case 'name':
            case 'picture':
            case 'lastSeen':
                (!anyInput(inputValue))
                    ? setErrorMessage(`A ${inputName} is required`)
                    : setErrorMessage('');
                if (inputName === 'picture') {
                    setUpload(false);
                }
                break;

            default:
                break;
        }
        if (!errorMessage) {
            if (inputName === 'picture') {
                // picture: target.files[0].name  <---- This is temporary until we get a Cloudinary link
                setFormState({ ...formState, [target.name]: URL.createObjectURL(target.files[0]) });
                setImageState({ image: target.files[0] });
            } else {
                setFormState({ ...formState, [target.name]: target.value });
                // console.log('client/../CreateReport.js:handleChange: formState=', formState);
            }
        }
    };

    return (
        <div className="create-report-class">

            <div className="outer-div body-bg-color">

                <div className="create-report-form">
                    <h4 data-testid="h1tag">File a Missing Pet Report</h4>
                    <h5>Please provide all the details that could help in locating the missing pet.</h5>
                    <p style={{ maxWidth: '400px', textAlign: 'center' }}>Your email will be kept confidential. </p>

                    <form className="missing-pet-report" id="missing-pet-report" onSubmit={handleSubmit}>
                        <div className="form-error-div">
                            {errorMessage && (
                                <p className="error-text">{errorMessage}</p>
                            )}
                        </div>
                        <div className="">
                            <input className="" placeholder="Name" value={name} type="text" name="name" onChange={handleChange} />
                        </div>

                        <div className="">
                            <input className="" placeholder="Breed" value={breed} type="text" name="breed" onChange={handleChange} />
                        </div>

                        <div className="">{upload ? (<label className="custom-btn" htmlFor="picture" >Upload Picture
                            <input id="picture" className="input-file" placeholder="Upload a picture" type="file" accept="image/*" name="picture" onChange={handleChange} />
                        </label>) : (<a onClick={setUpload}><img id="upload-thumbnail" src={picture} ></img></a>)}

                        </div>

                        <div className="">
                            <textarea rows="3" cols="40" className="" placeholder="Please provide a concise description of your pets identifying featrures" value={description} name="description" onChange={handleChange}></textarea>
                            {/* <input className="" placeholder="Description" value={description} type="text" name="description" onChange={handleChange} /> */}
                        </div>

                        <div className="">
                            <input className="" placeholder="Last known location" value={lastSeen} type="text" name="lastSeen" onChange={handleChange} />
                        </div>

                        <div className="">
                            <button className="custom-btn" type="submit">Submit <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                        </div>
                    </form>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default CreateReport;