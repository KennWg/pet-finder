import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


import { anyInput } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { CREATE_REPORT } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

let autoComplete;
const addScriptToHTML = (url, callback) => {
    let script = document.createElement('script');
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "completed") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["geocode"], componentRestrictions: { country: ["us","ca"] } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);

    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
};

const handlePlaceSelect = async (updateQuery) => {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
};




function CreateReport() {

    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        addScriptToHTML(
            `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_PET_ALERT_GOOGLE_MAPS_API_KEY}&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);




    const [state, dispatch] = useStoreContext();

    const [formState, setFormState] = useState({ name: '', breed: '', picture: '', description: '', lastSeen: '', createdBy: '' });

    const [imageState, setImageState] = useState({ image: '' });

    const { name, breed, description, lastSeen, picture } = formState;

    const { image } = imageState;

    const [errorMessage, setErrorMessage] = useState('');

    const [createReport, { error }] = useMutation(CREATE_REPORT);

    const [upload, setUpload] = useState(true);

    console.log('pop', process.env.PET_ALERT_GOOGLE_MAPS_API_KEY)

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
                    <h5>Please provide all the details that could </h5>
                    <h5>help in locating the missing pet.</h5>

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

                        <div className="search-location-input">
                            <input
                            name="lastSeen"
                            type="text"
                                ref={autoCompleteRef}
                                onChange={event => {
                                    setQuery(event.target.value);
                                    handleChange();
                                }}
                                placeholder="Last known location"
                                value={query}
                            />
                            {/* <input className="" placeholder="Last known location" value={lastSeen} type="text" name="lastSeen" onChange={handleChange} /> */}
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