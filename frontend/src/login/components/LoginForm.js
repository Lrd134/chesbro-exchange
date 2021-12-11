import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../LoginImport';
class LoginForm extends Component {
  state = {
    name: ""
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state)
    this.setState({name: ""})
  }
  handleChange = event => {
    this.setState({[event.target.name.split('-')[1]]: event.target.value})
  }
  render() {
    return ( 
      <div className="login container">
      <form onSubmit={this.handleSubmit} className="user form">
        <input onChange={this.handleChange} name="user-name" type="text" className="user input" value={this.state.name}/><br></br>
        <input type="submit" className="user submit"/>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (state) => loginUser(dispatch, state.name)
  }
}
export default connect(null, mapDispatchToProps)(LoginForm);
