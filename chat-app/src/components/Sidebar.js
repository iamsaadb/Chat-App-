
import React, { Component } from 'react'

class Sidebar extends Component {

    render () {
        return (
    
	<aside id="sidebar" className="sidebar">
<<<<<<< HEAD
=======
	   <div className="ui fluid container" >
>>>>>>> 30f731f90cec713894d27b8c5303059008846391
		<ul>
			{this.props.users.map((user, i) => 
				<li key={i}>{user.username}</li>
			)}
		</ul>
	</aside>
)}}

export default Sidebar