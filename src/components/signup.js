import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

//import { SignUpLink } from './SignUp';
import firebase from 'firebase';
import { createHashHistory} from 'history';
import Navbar from './navbar/navbar';
//import './js/bootstrap.js';
//import './js/jquery.main.js';
//import './js/jquery-1.11.2.min.js';
export const history=createHashHistory();
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  var f=1; 
  function fever() {
      f=1;
  }
  function fever2(){
    //if(f==1)
    history.goBack();
  }
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
            var errorCode="lol";f=0; var a;
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(result){
              
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                a="a";
                  console.log(errorCode[0].localeCompare(a));
                  if(errorCode[0].localeCompare(a)==0)
                    fever(); 
                //console.log(error);
                // ...
        
              });
            //   if(!this.state.error){
            //     console.log("phew!!");
            //     //history.pop();
            //     //history.replace('/add_data');
            //     history.goBack();
                
            //     console.log("nice");
            //    // history.goForward();
            //     //history.push('/home.html/add_data');
            // }
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
  //   function Click() {
  

  //     console.log("something");
  //     history.goBack();
  // }
    return (
      <div>
        <Navbar/>
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
        <input type="submit" value="submit"/>
{/*         
         <button ><span>GO</span> <i class="fa fa-check"></i></button>
       */}
      </div>

      </form>

      {/* <button onClick={function(){fever2()}}><span>Login</span> <i class="fa fa-check"></i></button>
       */}
      </div>

    );
  }
}

export default signup;