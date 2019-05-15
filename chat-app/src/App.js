import React, { Component } from 'react';

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
  }
}

export default App;
