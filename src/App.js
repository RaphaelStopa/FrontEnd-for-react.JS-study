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
            {/* <Route path="/add-users/:id" element= {<CreateUserComponent/>}></Route> */}
            {/* <Route path="/update-user/:id" element= {<UpdateUserComponent/>} ></Route> */}
            <Route path="/user/:id" element= {<User/>} ></Route>
            https://www.youtube.com/watch?v=XkVpb_8IPUM 2.28
          </Routes>
        </div>
      <FooterComponent/>
    </div>
    </Router>
  );
}

export default App;
