import React, { useState } from 'react'

import { validateEmail, validatePassword } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';

function SignUp() {
    const [formData, setFormData] = useState({ username: '', email: '', address: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const [createUser, { error }] = useMutation(CREATE_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('You hit the SUBMIT button');

        if (!errorMessage) {
            setFormData({ [e.target.name]: e.target.value });
            console.log('client/src/components/Main/SignUp.js:Form - NO ERROR - ', formData);
        }

        try {
            console.log("TRYING SIGNUP");
            const response = await createUser({
                variables: { ...formData }
            });

            if (!response.ok) {
              throw new Error('something went wrong! -- In SignUp');
            }

            const { token, user } = await response.json();
            console.log(user);
            console.token(token);
            // Auth.login(token);
        } catch (e) {
            console.error('client/src/components/Main/SignUp.js:Form - FORM ERROR -', e);
            alert('- FORM ERROR - (see console)');
        }

        setFormData({
            username: '',
            email: '',
            address: '',
            password: '',
        });
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

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


    };


    return (
        <div className="signup-class  outer-div">
            <h2 data-testid="h1tag">Sign Up</h2>
            <h3>Please provide a username, your email and street addresses and a password.</h3>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>Your email will be kept confidential. </p>

            <div className="error-div">
                {errorMessage && (                        
                    <p className="error-text">{errorMessage}</p>                        
                )}
            </div>
            

            <form className="signup-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" placeholder="Username" type="text" name="username" defaultValue={formData.username} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Email" type="email" name="email" defaultValue={formData.email} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Address" type="text" name="address" defaultValue={formData.address} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Password" type="text" name="password" defaultValue={formData.password} onBlur={handleChange} />
                </div>

                <div className="">
                    <button className="" type="submit">Submit<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </form>

        </div>
    );
}
export default SignUp