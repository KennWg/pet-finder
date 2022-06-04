import React, { useState } from 'react'
import { validateEmail, validatePassword } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('You hit the SUBMIT button');
        if (errorMessage) {
            console.log('client/src/components/Main/Login.js:Form - NO ERROR - ', formData);
            return;
        }

        try {
            console.log("TRYING LOGIN", formData);
            const { data } = await loginUser({
                variables: { ...formData }
            });
            console.log("try COMPLETED");

            if (!data) {
                throw new Error('response was not "OK" something went wrong! -- In Login');
            }
            else {
                const { token, user } = data.login;
                console.log(user);
                Auth.login(token);
            }

        } catch (e) {
            console.error('client/src/components/Main/Login.js:Form - FORM ERROR -', e);
            alert('Sorry, those are not valid credentials');
        }

        setFormData({
            email: '',
            password: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

        <div className="login-class body-bg-color outer-div">
            <h4 data-testid="h1tag">Log In</h4>

            <form className="signup-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" placeholder="email" type="text" name="email" value={formData.email} onChange={handleChange} onBlur={validate} />
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="password" type="password" name="password" value={formData.password} onChange={handleChange} onBlur={validate} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div className="d-flex justify-content-center  ">
                    <button className="custom-btn" data-testid="button" type="submit">Submit<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </form>



        </div>
    );
}

export default Login;