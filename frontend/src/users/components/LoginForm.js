import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../UserImport';
class LoginForm extends Component {
  state = {
    name: ""
  }
  handleSubmit = event => {

  }
  handleChange = event => {

  }
  render() {
    return ( 
      <div className="login container">
      <form onSubmit={this.handleSubmit} className="user form">
        <input onChange={this.handleChange} name="user-name" type="text" className="user input"/><br></br>
        <input type="submit" className="user submit"/>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: ({name}) => loginUser(dispatch, name)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
