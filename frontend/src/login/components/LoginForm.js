import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../LoginImport';

class LoginForm extends Component {
  state = {
    name: ""
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  handleChange = event => {
    this.setState({[event.target.name.split('-')[1]]: event.target.value})
  }
  render() {
    return ( 
      <div className="login container">
      <form onSubmit={this.handleSubmit} className="user form">
        <input onChange={this.handleChange} name="user-name" placeholder="UserName" type="text" className="user input" value={this.state.name}/><br></br>
        <Login user={this.state}/>
      </form>
    </div>
    )
  }
}
export default connect()(LoginForm);
