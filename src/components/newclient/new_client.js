import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../css/bootstrap.css';
import '../../css/main.css';
import '../../css/util.css';
import '../../css/all.css';
/*import './css/all.css';
import './css/all.css.map';
import './css/bootstrap.css';
import './css/main.css';
import './css/bootstrap.css.map';
import './css/util.css';*/
//import {Link} from 'react-router-dom';

//import './js/bootstrap.js';
//import './js/jquery.main.js';
//import './js/jquery-1.11.2.min.js';
import Navbar from "../navbar/navbar";

class new_client extends Component {
  render() {
    return (
      <div className="new_client">
      
        <div id="wrapper">
                <header id="header">
                    <div className="container">
                        <div className="logo"><a href="home.html"><img src={require('../../images/logo.png')} alt="Sports"/></a></div>
                        <Navbar/>
                        {/* <nav id="nav">
                            <div className="nav-drop">
                                <ul>
                                    <li><a href="new_client.html">New Client</a></li>
                                    <li><a href="add_data.html">Add Data</a></li>
                                    <li><a href="view_data.html">View Data</a></li>
                                </ul>
                            </div>
                        </nav> */}
                    </div>
                </header>
            <section className="visual">
                <div className="container">
                    <center><div className="wrap-contact3">
                        <form className="contact3-form validate-form">
                            <h3 className="contact3-form-title">
                                New Client 
                            </h3>

                            <div className="wrap-input3 validate-input" data-validate="Name is required">
                                <input className="input3" type="text" name="name" placeholder="Name"/>
                                <span className="focus-input3"></span>
                                
                            </div>

                            <div className="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                <input className="input3" type="email" name="email" placeholder="Email Address"/>
                                <span className="focus-input3"></span>
                            </div>
                            
                            
                            <div className="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                <input className="input3" type="text" name="phone" placeholder="Phone Number"/>
                                <span className="focus-input3"></span>
                            </div>
                            
                            <div className="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                <input className="input3" type="text" name="Plate_num" placeholder="Car Plate number"/>
                                <span className="focus-input3"></span>
                            </div>

                            <div className="wrap-input3 input3-select">
                                <span className="focus-input3"></span>
                            </div>

                            <div className="container-contact3-form-btn">
                                <button className="contact3-form-btn">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div></center>
                </div>
                <img src={require('../../images/img-bg-01.jpg')} alt="" className="bg-stretch"/>
            </section>

        </div>


        
    </div>
    );
  }
}

export default new_client;
