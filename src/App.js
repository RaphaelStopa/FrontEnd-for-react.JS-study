import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserComponent from './components/UserComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <div>
      <HeaderComponent/>
        <div>
          <Routes>
            <Route path="/" element= {<UserComponent/>}></Route>
          </Routes>
        </div>
        <UserComponent/>
      <FooterComponent/>
    </div>
    </Router>
  );
}

export default App;
