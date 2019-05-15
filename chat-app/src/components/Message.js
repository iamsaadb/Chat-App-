import React from 'react'

const Message = ({message, author}) => (
	<p> 
	     <i>{author}: {message} </i>
	</p>)

export default Message