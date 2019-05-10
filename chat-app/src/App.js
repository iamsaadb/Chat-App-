import React, { Component } from 'react';

import './App.css';
import ChatPage from "./ChatPage";
import Login from "./Login";


class App extends Component {

  state = {
    username: null,
  }

  setUsername = (username) => {
     this.setState({username});
  }

    render() {
      return (
        <div id='main app'>

        {/* If username is not present, render the login page. Otherwise render Chat app page  */}
        {
          !this.state.username ?  <Login setUsername={this.setUsername}/> : <ChatPage/>
        }

        </div>
      );
    }
  }
  
  export default App;