
import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessagesList = ({ messages }) => (
	<section id="messages-list" >
	   <div style={{textAlign: 'left', marginTop: 20, marginLeft: 20,lineHeight: 2}}>
		<ul >
			{messages.map(message => (
				<Message
					key={message.id}
					{...message}
				/>
			))}
		</ul>
		</div>
	</section>
)

MessagesList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}

export default MessagesList