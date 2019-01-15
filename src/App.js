import React, { Component } from 'react';
//import logo from ‘./logo.svg’;
import './App.css';
// import web3 from './web3';
// import ipfs from './ipfs';
// import storehash from './storehash';
// import { Button} from 'react-bootstrap';
// import { Form} from 'react-bootstrap';
// import { Table} from 'react-bootstrap';
// import { Grid} from 'react-bootstrap';

//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/all.css';
import './css/all.css.map';
import './css/bootstrap.css';
import './css/main.css';
import './css/bootstrap.css.map';
import './css/util.css';
import {Link,BrowserRouter} from 'react-router-dom';
//import { Provider } from "./context";
//import './js/bootstrap.js';
//import './js/jquery.main.js';
//import './js/jquery-1.11.2.min.js';
import new_client from "./components/newclient/new_client";
//import add_client from "./components/addclient/add_client";

import home from './components/home/home';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import add_client from './components/add_data';

class App extends Component {
 
    
render() {
      
      return (
        <div className="App">
          <BrowserRouter>
          <Switch>
          <Route each path="/new_client" component={new_client}></Route>
          <Route each path="/add_client" component={add_client}></Route>
          
            <Route each path="/" component={home}></Route>
            
          </Switch>

        
        </BrowserRouter>
          
          
     </div>
      );
    } 
} 
export default App;