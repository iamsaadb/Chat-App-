import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMessages, handlTextChange, submitMessage } from './redux/actions/messageActions';
import { updateUserList } from './redux/actions/userActions';
import './App.css';

const Message = ({message, author}) => (
	<p> 
	     <i>{author}: {message} </i>
	</p>)

class ChatPage extends Component {
  componentDidMount() {
    axios.get('/messanger/getMessages')
      .then((res) => {

        //filters out the id attribute from the database array, saves to redux store:
        console.log(res.data);
        const resultArray = (res.data);
        const messageList = resultArray.map(({_id, ...keepAttrs}) => keepAttrs);
        this.props.updateMessages(messageList);
      })
      .catch((e) => {
        console.log(e);
      });

      axios.get('/messanger/getUsers')
      .then((res) => {

        //filters out the data portion from the database array, saves to redux store:
        const resultArray = (res.data);
        const userList = resultArray.map(({_id, ...keepAttrs}) => keepAttrs);
        this.props.updateUserList(userList);
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
    return (
      <div className="ChatPage">
        <div>
          <div className="message-area">      
              
            {this.props.messages.map((message, i) => 
               <Message key={i} 
                        message={message.message}
                        author={message.author === this.props.user? 'me' : message.author}
                />) } 
          </div>
        </div>
        <div>
          <input type="text" value={this.props.text} onChange={this.handleTextChange} />
        </div>
        <div>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages,
    text: state.messageReducer.text,
    user: state.userReducer.currentUser,
  };
};

const mapDispatchToProps = { updateMessages, updateUserList, handlTextChange, submitMessage };

export default connect( // from react-redux
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
