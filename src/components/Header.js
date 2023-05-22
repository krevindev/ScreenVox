import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { session as dbSession } from '../localStorage/dummySession';
import { useEffect, useState } from 'react';

export default function Header() {

    const [session, setSession] = useState(dbSession);

    const navigate = useNavigate();
    const location = useLocation().pathname;

    return (
        <div id="Header">
            <div className='header-part'>
                <Link to='/'>
                    <h1>SV</h1>
                </Link>
            </div>
            <div className='header-part'>
                <Link to='/signin'>
                    <h1>SIGN IN</h1>
                </Link>
            </div>
        </div>
    )
}