import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './SignInPage.css';

export default function SignInPage() {

    const navigate = useNavigate();

    const [isSignUp, setIsSignUp] = useState(false);

    const pageRef = useRef(null);

    useEffect(() => {
        if (isSignUp) {
            pageRef.current.classList.add('reg-form');
        }else{
            pageRef.current.classList.remove('reg-form')
        }
    })

    return (
        <div id='SignInPage' className='route-page' ref={pageRef}>
            <div id='signin-page-head'>
                <div id='signin-page-head-content'>
                    <div id='signin-page-head-content-inner'>
                        <h1>SCREEN<br />VOX</h1>
                    </div>
                </div>
            </div>
            <div id='form-container'>
                <div id='form-container-inner'>
                    <form onSubmit={e => e.preventDefault()}>
                        <input placeholder='Username' required />
                        <input type='password' placeholder='Password' required />
                        <button className='form-submit-btn' type='submit'>SIGN IN</button>
                        <button onClick={e => setIsSignUp(true)} >SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    )
}