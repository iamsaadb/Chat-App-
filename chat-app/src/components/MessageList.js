import React, { Component } from 'react'
import Message from './Message'


class MessagesList extends Component {

    render(){
       return (
	   <section id="messages-list" >
		<ul>
            {this.props.messages.map((message, i) => 
                <Message key={i} 
                      message={message.message}
            author={message.author === this.props.currentUser? 'me' : message.author}/>)}    
		</ul>

	</section>
)}}

export default MessagesList