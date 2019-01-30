import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

//import { SignUpLink } from './SignUp';
import firebase from 'firebase';
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
class signup extends Component{
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
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
        
              });
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

      <form onSubmit={this.onSignIn}>
        <div class="signincontainer col-centered">
          <h1 class="title">Sign Up </h1>
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
         <button ><span>GO</span> <i class="fa fa-check"></i></button>
      </div>

      </form>

    );
  }
}

export default signup;