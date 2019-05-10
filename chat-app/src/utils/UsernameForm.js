import React, { Component } from 'react'
import './UsernameForm.css';
import {Redirect} from 'react-router-dom';

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
     isRedirect: false,
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }

 onSubmit(e) {
   e.preventDefault()
   //this.props.onSubmit(this.state.username)
   this.setState({isRedirect: true});
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    if(this.state.isRedirect) return <Redirect to="/app"/>;
    return (
        <div className="App">
        <header className="App-header">
        <div className="widget">
          <h2>What is your username?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
          </div>
       </header>
     </div>
   )
  }
}

 export default UsernameForm