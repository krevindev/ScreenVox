import './SignInPage.css';
import { useState, useEffect, useRef } from 'react';


export default function SignInPage() {

    useEffect(() => {
        document.querySelectorAll('form').forEach(form => form.addEventListener('submit', e => e.preventDefault()))
    });

    const [state, setState] = useState({
        isRegForm: false
    });

    function handleSwitch(e) {
        e.preventDefault();
        state.isRegForm ? setState({ ...state, isRegForm: false }) : setState({ ...state, isRegForm: true });
    }

    return (
        <div id="SignInPage" className='route-page'>
            {
                state.isRegForm ? <SignUpForm passedFuncs={{ handleSwitch: handleSwitch }} /> : <SignInForm passedFuncs={{ handleSwitch: handleSwitch }} />
            }
        </div>
    )
}


/** Sign In Form */
function SignInForm({ passedFuncs }) {

    return (
        <div id="signin-form" className='signin-page-form'>
            <form>
                <input id='signin-uname-input' type='email' placeholder='Email or Phone Number' required />
                <input id='signin-passw-input' type='password' placeholder='Password' required />
                <button type='submit' className='signin-submit-btn'>Sign In</button>
                <button onClick={e => passedFuncs['handleSwitch'](e)}>Create Account</button>
            </form>

        </div>
    )
}

/** Sign Up Form */
function SignUpForm({ passedFuncs }) {

    const signUpFormRef = useRef(null);
    const [state, setState] = useState({
        isValidForSubmission: false,
    })

    useEffect(() => {

        const submitBtn = signUpFormRef.current.querySelector('.signin-submit-btn');

        if (state.isValidForSubmission) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }, [state])

    function handleSignUpChange() {

        const form = signUpFormRef.current;
        const fname = form.querySelector('input#signup-fname-input');
        const lname = form.querySelector('input#signup-lname-input');
        const uname = form.querySelector('input#signup-uname-input');
        const password = form.querySelector('input#signup-password-input');
        const passwordConfirm = form.querySelector('input#signup-password-confirm-input');


    }

    function isValidUsername(text) {
        // Remove leading and trailing whitespaces
        const trimmedText = text.trim();

        // Check if the trimmed text meets the username criteria
        const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
        return usernameRegex.test(trimmedText);
    };


    return (
        <div id="signup-form" className='signin-page-form'>
            <h1>Sign Up</h1>
            <form ref={signUpFormRef} onChange={handleSignUpChange}>

                <input id='signup-fname-input' type='text' placeholder='First Name' required /><input id='signup-lname-input' type='text' placeholder='Last Name' required />
                <input id='signup-uname-input' type='text' placeholder='Username' required />
                <input id='signup-password-input' type='text' placeholder='Create Password' required />
                <input id='signup-password-confirm-input' type='password' placeholder='Confirm Password' required />
                <button id='signup-submit-btn' className='signin-submit-btn' type='submit'>Sign Up</button>
                <button onClick={e => passedFuncs['handleSwitch'](e)}>Back</button>
            </form>
        </div>
    )
}


