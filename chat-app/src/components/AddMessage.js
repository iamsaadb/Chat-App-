
import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

const AddMessage = (props) => {
	let input


	return (
		<section id="new-message">
			<input placeholder="Type here to chat.."
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						props.dispatch(input.value, 'Me')
						input.value = ''
					}
				}}
				type="text"
				ref={(node) => {
					input = node
				}}
			/>
		</section>
	)
}

AddMessage.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default AddMessage