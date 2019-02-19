import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
//import { SignUpLink } from './SignUp';
import firebase from 'firebase';
import HashRouter from 'react-router-dom';
import { createHashHistory} from 'history';
import Navbar from './navbar/navbar';

//import App from '../App';
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  export const history=createHashHistory();
  var f=1; 
  function fever() {
      f=0;
  }
  function fever2(e){
    e.preventDefault();
  }
class login extends Component{
    constructor(props)
    {
        super(props);
        this.state =  {
            email:'',
            password:'',
            error:'',
          } ;
          this.onSignIn = this.onSignIn.bind(this);
    }
    
    onSignIn(e)
        {
            e.preventDefault();
            console.log(this.state.email+" "+this.state.password);
            //event.preventDefault();
            var errorCode="lol";f=0; var a;
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(result){
              history.goBack();
            }).catch(function(error) {
                // Handle Errors here.
                errorCode = error.code;
                var errorMessage = error.message;
                console.log(typeof(errorCode[0]));
                //errorCode=errorCode.tostring();
                  a="a";
                  console.log(errorCode[0].localeCompare(a));
                  if(errorCode[0].localeCompare(a)==0)
                    fever();  
                //console.log("error");
                // ...
        
              });
              
              
              // if(errorCode===-1){
              //   console.log("phew!!");
              //   history.goBack();
                
              //   console.log("nice");
              // }
              // else
              // {
              //   console.log('grrr!!');
              // }
              // if(this.state.email=="siby@gmail.com" && this.state.password=="123456")
              // this.props.history.push('/add_data');
        }
    
    componentWillMount()
    {
        const config={
            apiKey: "AIzaSyBMGzaJI04frjjWcDQ3FH4TZC79gBKXHks",
            authDomain: "car-docs.firebaseapp.com",
            databaseURL: "https://car-docs.firebaseio.com",
            projectId: "car-docs",
            storageBucket: "car-docs.appspot.com",
            messagingSenderId: "1504690872"
        };
        firebase.initializeApp(config);
    }
      
  render() {
    return (
      <div>
        <Navbar/>
      <form onSubmit={this.onSignIn}>

        <div class="signincontainer col-centered">
          <h1 class="title">LOG IN</h1>
          <div class="input">
            <input
              value={this.state.email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Username"
            />
            <span class="spin"></span>
          </div>
        </div>
        <div className="signincontainer col-centered">
          <input
            value={this.state.password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="button login col-centered">
        <input type="submit" value="submit"/>
        {/* <button onClick={function(){fever2()}><span>GO</span> <i class="fa fa-check"></i></button>
          */}
      </div>
      
      </form>
      
      {/* <button onClick={function(){fever2()}}><span>Click me</span> <i class="fa fa-check"></i></button> */}
      </div>
    );
  }
}

export default login;