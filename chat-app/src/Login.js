import React, { Component } from 'react';

import './App.css';


class Login extends Component {


logIn = (e) => {
    e.preventDefault()
    this.props.setUsername(e.target.username.value);
}

    render() {
      return (
        <div id= 'login'>
            <label>Username: </label>
            <form onSubmit={this.logIn}> 
                <input type="text" id="username"/> 
                <input type="submit" value="Join Chat"/>
            </form>
        </div>
      );
    }
  }
  
  export default Login;