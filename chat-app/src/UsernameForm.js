import React, { Component } from 'react'
import axios from 'axios';
import './UsernameForm.css';


class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }

 onSubmit(e) {
   e.preventDefault()
   this.props.setUsername(e.target.username.value);
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
        <div className="App">
        <header className="App-header">
        <div className="widget">
          <h2>Welcome to our Chat Application!</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Please enter a username here: "
              id="username"
              onChange={this.onChange}
            />
            <input type="submit" value="Join Chat"/>
          </form>
          </div>
       </header>
     </div>
   )
  }
}

 export default UsernameForm