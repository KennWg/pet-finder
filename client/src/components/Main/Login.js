import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function Login() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('client/src/components/Main/Login.js:Form -- ', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
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

        <div className="login-class">
            <h4 data-testid="h1tag">Log In</h4>
            {/* <a href="mailto:dcpb777@gmail.com" rel="noopener noreferrer" target="_blank"><h5>Please provide your name and email address.</h5></a>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>Your email will be kept confidential. </p> */}

            <form className="signup-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" placeholder="username" type="text" name="username" defaultValue={name} onBlur={handleChange} />
                </div>
                
                <div className="form-group">
                    <input className="form-control" placeholder="password" type="text" name="password" defaultValue={name} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>

            <div className="d-flex justify-content-center  ">
                <button className="btn btn-primary" data-testid="button" type="submit">Submit<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>

        </div>
    );
}

export default Login;