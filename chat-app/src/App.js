import React, { Component } from 'react';
<<<<<<< HEAD

import './App.css';
import {Sidebar} from "./containers/Sidebar";
import {MessagesList} from "./containers/MessagesList";
import {AddMessage} from "./containers/AddMessage";
<<<<<<< HEAD
import NavBar from "./components/Navbar";
=======
>>>>>>> 13305a36158c5f8eb1957427d4388caa274fe86b

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
      <NavBar />   
      <div id="container">

=======
      <div id="container">
>>>>>>> 13305a36158c5f8eb1957427d4388caa274fe86b
       <Sidebar />
        <section id="main">
         <MessagesList />
         <AddMessage />
        </section>
      </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> 13305a36158c5f8eb1957427d4388caa274fe86b
    );
=======
import { connect } from 'react-redux';
import { updateUser, addUser, submitUser } from './redux/actions/userActions';
import ChatPage from "./ChatPage";
import UsernameForm from "./UsernameForm";
import './App.css';

class App extends Component {

  state = {
     username: null,
  }

  setUsername = (username) => {
    console.log(`setUsername: ${username}`);
    this.setState({username});
    this.props.submitUser(username);
>>>>>>> 30f731f90cec713894d27b8c5303059008846391
  }
}

<<<<<<< HEAD
export default App;
=======
    render() {
      return (
        <div id='main app'>
        {/* If username is undefinied render the login page. Otherwise render Chat app page  */}
        {
          !this.state.username ?  <UsernameForm setUsername={this.setUsername}/> : <ChatPage/>
        }
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      currentUser: state.userReducer.currentUser,
    };
  };
  
  const mapDispatchToProps = { updateUser, addUser, submitUser };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App);
>>>>>>> 30f731f90cec713894d27b8c5303059008846391
