import React, { useState } from 'react'
import { validateEmail, validatePassword } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

function SignUp() {
    const [formData, setFormData] = useState({ username: '', email: '', address: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const [createUser, { error }] = useMutation(CREATE_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('You hit the SUBMIT button');

        if (errorMessage) {
            // setFormData({ [e.target.name]: e.target.value });
            console.log('client/src/components/Main/SignUp.js:Form - NO ERROR - ', formData);
            return;
        }

        try {
            console.log("TRYING SIGNUP", formData);
            const { data } = await createUser({
                variables: { ...formData }
            });
            console.log("try COMPLETED");
            console.log(data)

            if (!data) {
                throw new Error('response was not "OK" something went wrong! -- In SignUp');
            }
            else {
                const { token, user } = data.addUser;
                console.log(user);
                console.log(token);
                Auth.login(token);
            }

        } catch (e) {
            console.error('client/src/components/Main/SignUp.js:Form - FORM ERROR -', e);
            console.log("Mutation error :", error);

            // alert('- FORM ERROR - (see console)');
        }

        setFormData({
            username: '',
            email: '',
            address: '',
            password: '',
        });
    };



    const handleChange = (e) => {
        // console.log('Handling Change');
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData);
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
                    <input className="form-control" placeholder="Username" type="text" name="username" value={formData.username} onChange={handleChange} onBlur={validate} />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} onBlur={validate} />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Address" type="text" name="address" value={formData.address} onChange={handleChange} onBlur={validate} />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} onBlur={validate} />
                </div>

                <div className="">
                    <button className="" type="submit">Submit<i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </form>

        </div>
    );
}
export default SignUp