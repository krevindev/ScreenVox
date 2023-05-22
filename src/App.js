import './App.css';

import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home/Home';
import Header from './components/Header';
import SignInPage from './pages/home/signin/SignInPage';

import './localStorage/dummySession';
import { session } from './localStorage/dummySession';

function App() {

  const [state, setState] = useState({
    isHeaderVisible: true,
    location: '/',
    isLoggedIn: session['isLoggedIn']
  });

  return (
    <Router>
      <div id="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>

      </div>
    </Router>
  );
};


export default App;