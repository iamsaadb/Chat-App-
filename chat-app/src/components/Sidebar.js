

import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => (
	<aside id="sidebar" className="sidebar">
	   <div style={{textAlign: 'center', marginTop: 20, lineHeight: 3, color: '#191970'}}>
		<ul>
			{users.map(user => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
		</div>
	</aside>
)

Sidebar.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}

export default Sidebar