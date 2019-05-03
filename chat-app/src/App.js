import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMessages, handlTextChange, submitMessage } from './redux/actions/messageActions';
import './App.css';

const Message = ({ data }) => (<div className="text-left">{"Name: "+data}</div>);

class App extends Component {
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

  render() {
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
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages,
    text: state.messageReducer.text,
  };
};

const mapDispatchToProps = { updateMessages, handlTextChange, submitMessage };

export default connect( // from react-redux
  mapStateToProps,
  mapDispatchToProps,
)(App);
