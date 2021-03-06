import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { createHashHistory} from 'history';
import Navbar from '../navbar/navbar';
//import './js/bootstrap.js';
//import './js/jquery.main.js';
//import './js/jquery-1.11.2.min.js';
export const history=createHashHistory();

class home extends Component {
    render() {
      function Click() {
  

        console.log("something");
        history.goBack();
    }
      return (
<div id="wrapper">
          <header id="header">
            <div className="container">
              <div className="logo">
              
                     {/* <img src={require('./images/logo.png')} alt="Sports"/>  */}
                    
              </div>
              <nav id="nav">
                <div className="opener-holder">
                  <a href="#" className="nav-opener"><span></span></a>
                </div>
                <div className="container">
                <Navbar/>

                        {/* <nav id="nav">
                            <div className="nav-drop">
                                <ul>
                                    <li><a href="./new_client.html">New Client</a></li>
                                    <li><a href="./add_data.html">Add Data</a></li>
                                    <li><a href="view_data.html">View Data</a></li>
                                </ul>
                            </div>
                        </nav>
                         */}

                       
                  <div className="drop-holder visible-sm visible-xs">
                    <span>Follow Us</span>
                    <ul className="social-networks">
                      <li><a className="fa fa-github" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-facebook" href="#"></a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <section className="visual">
            <div className="container">
              <div className="text-block">
                <div className="heading-holder">
                  <h1>Car-Doc portal</h1>
                </div>
                <p className="tagline">A secure way to access and store documents!</p>
                <span className="info">Get added now</span>
                

              </div>
              
            </div>
             <img src={require('../../images/img-bg-01.jpg')} alt="" className="bg-stretch"/> 
          </section>
        </div>
      );
                        }
                    }


                    export default home;