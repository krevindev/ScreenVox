import './Home.css';
import Header from '../../components/Header';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { session } from '../../localStorage/dummySession';

export default function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!session.isLoggedIn) navigate('/signin');
    })

    return (
        <div id="Home" className="route-page">
            <Header />
            <h1>Home</h1>
        </div>
    )
}