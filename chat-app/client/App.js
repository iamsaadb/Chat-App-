import React, { Component } from 'react';
<<<<<<< HEAD:chat-app/src/App.js
=======
import axios from 'axios';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateMessages, handlTextChange, submitMessage } from './redux/actions/messageActions';
import './App.css';
import Login from './Login';
>>>>>>> 3f0d470df8227af3855cae946b174dbb73399370:chat-app/client/App.js

import './App.css';
import {Sidebar} from "./containers/Sidebar";
import {MessagesList} from "./containers/MessagesList";
import {AddMessage} from "./containers/AddMessage";

class App extends Component {
<<<<<<< HEAD:chat-app/src/App.js
  render() {
    return (
      <div id="container">
       <Sidebar />
        <section id="main">
         <MessagesList />
         <AddMessage />
        </section>
=======
  constructor(props){
    super(props);
    
  }
  state = {
    name: "Chat Room!"
  };

  componentDidMount() {
    axios.get('/messanger/getMessages')
      .then((res) => {
        this.props.updateMessages(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onSubmit = () => {
    this.props.submitMessage();
  }

  handleTextChange = (e) => {
    this.props.handlTextChange(e.target.value);
  }

  render(){
    var arr = ["Nour","Tristan","Ratna", "Tigist"];
    return (
      <div className="App">
        
        <div className="container" style={{width:"100%", margin:0, padding:0}}>
          <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1" style={{marginLeft:280}}>{this.state.name}</span>
          </nav>
          <div className="row no-gutters" style={{height:window.innerHeight, width:"100%", margin:0, padding:0}}>
            <div className="col-lg-3" style={{backgroundColor:"grey"}}>
            <div className="list-group">
              {
                arr.map((name)=>{
                  return (
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{name}</h5>
                      </div>
                    </a>
                  )
                })
              }
              
            </div>
            </div>
            <div className="col-lg-9" style={{backgroundColor:"grey"}}>
            
                <div className="message-area" style={{width:"100%",height:window.innerHeight}}>
                  {this.props.messages.map((message, i) => <Message key={i} data={message} />)}
                </div>
                
            </div>
          </div>
          <footer className="footer mt-auto py-3">
                  <div className="container">
                    <div>
                      <input type="text" value={this.props.text} onChange={this.handleTextChange} style={{paddingBottom: 0}}/>
                    </div>
                    <div>
                      <button onClick={this.onSubmit}>Submit</button>
                    </div>
                  </div>
                </footer>
        </div>
        
>>>>>>> 3f0d470df8227af3855cae946b174dbb73399370:chat-app/client/App.js
      </div>
    );
  }
}

export default App;
