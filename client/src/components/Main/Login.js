import React, { useState } from 'react'
import { validateEmail, validatePassword } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';


function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;

    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('You hit the SUBMIT button');
        if (errorMessage) {
            // setFormData({ [e.target.name]: e.target.value });
            console.log('client/src/components/Main/Login.js:Form - NO ERROR - ', formData);
            return;
        }

        try {
            console.log("TRYING LOGIN", formData);
            const response = await loginUser({
                variables: { ...formData }
            });
            console.log("try COMPLETED");

        } catch (e) {
            console.error('client/src/components/Main/Login.js:Form - FORM ERROR -', e);
            // alert('- FORM ERROR - (see console)');
        }

        setFormData({
            email: '',
            password: ''
        });
    };

    const handleChange = (e) => {
        console.log('Handling Change');
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const validate = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else if (e.target.name === 'password') {
            const isValid = validatePassword(e.target.value);
            if (!isValid) {
                setErrorMessage('Your password must be at least 8 characters long.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }

        }
    }

    return (

        <div className="login-class  outer-div">
            <h4 data-testid="h1tag">Log In</h4>
            {/* <a href="mailto:dcpb777@gmail.com" rel="noopener noreferrer" target="_blank"><h5>Please provide your name and email address.</h5></a>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>Your email will be kept confidential. </p> */}

            <form className="signup-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" placeholder="email" type="text" name="email" value={formData.email} onChange={handleChange} onBlur={validate} />
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="password" type="text" name="password" value={formData.password} onChange={handleChange} onBlur={validate} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div className="d-flex justify-content-center  ">
                    <button className="btn btn-primary" data-testid="button" type="submit">Submit<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </form>



        </div>
    );
}

export default Login;