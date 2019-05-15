
import React, { Component } from 'react'

class Sidebar extends Component {

    render () {
        return (
    
	<aside id="sidebar" className="sidebar">
	   <div className="ui fluid container" >
		<ul>
			{this.props.users.map((user, i) => 
				<li key={i}>{user.username}</li>
			)}
		</ul>
		</div>
	</aside>
)}}

export default Sidebar