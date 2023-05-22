import './SignInPage.css';

export default function SignInPage() {
    return (
        <div id='SignInPage' className='route-page'>
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
                        <button type='submit'>SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}