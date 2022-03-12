import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserComponent from './components/UserComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import User from './components/User';

function App() {
  return (
    <Router>
      <div>
      <HeaderComponent/>
        <div>
          <Routes>
            <Route path="/" exact element= {<UserComponent/>}></Route>
            <Route path="/users" element= {<UserComponent/>}></Route>
            <Route path="/user"  element= {<User/>} ></Route>
            <Route path="/user/:id" exact element= {<User/>} ></Route>
          </Routes>
        </div>
      <FooterComponent/>
    </div>
    </Router>
  );
}

export default App;
