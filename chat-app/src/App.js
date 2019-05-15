import React, { Component } from 'react';
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
  }

    render() {
      return (
        <div id='main app'>
        {/* If username is undefinied render the login page. Otherwise render Chat app page  */}
        {
          !this.state.username ?  <UsernameForm setUsername={this.setUsername}/> : <ChatPage setUsername={this.setUsername}/>
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
