import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
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

        <BrowserRouter>
            <div id='main app'>

            {/* If username is not present, render the login page. Otherwise render Chat app page  */}
            {
               !this.state.username ?  <Login setUsername={this.setUsername}/> : <ChatPage name={this.state.username}/>
            }
            </div>
            {/* <Route path='/login' render={() => <Login setUsername={this.setUsername}/>} />*/}
        </BrowserRouter>
      );
    }
  }
  
  export default App;