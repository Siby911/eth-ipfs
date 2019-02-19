import React, { Component } from 'react';

// import './App.css';
// import logo from './logo.svg';
// import './App.css';
// import './css/all.css';
// import './css/all.css.map';
// import './css/bootstrap.css';
// import './css/main.css';
// import './css/bootstrap.css.map';
//import './css/util.css';
//import {Link,BrowserRouter,withRouter} from 'react-router-dom';
//import new_client from "./components/newclient/new_client";";

class Navbar extends Component {
 
    
render() {
      
      return (
        <div className="navbar">
            <ul>
                <li>
                   <a href="/"> Home </a>
                </li>
                <li>
                   <a href="/new_client"> New Client </a>
                </li>
                <li>
                   <a href="/add_client"> Add client </a>
                </li>
                <li>
                   <a href="/login"> Login </a>
                </li>
                <li>
                   <a href="/signup"> Signup </a>
                </li>
            </ul>
          
        </div>
      );
    } 
} 
export default Navbar;