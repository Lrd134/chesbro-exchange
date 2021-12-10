import './UserForm.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../UserImport';
class UserForm extends Component {
  state = {
    name: "",
    email: "",
  }
  handleChange = event => {
    this.setState({[event.target.name.split("-")[1]]: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.userEvent(this.state)
    this.setState({
      name: "",
      email: ""
    })
  }

  render() {
    return (
      <div className="signup container">
        <form onSubmit={this.handleSubmit} className="user form">
          <input onChange={this.handleChange} name="user-name" type="text" className="user input"/><br></br>
          <input onChange={this.handleChange} name="user-email" type="text" className="user input"/><br></br><br></br>
          <input type="submit" className="user submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      userEvent: state => {
          newUser(dispatch, state)
      }
    }
}
export default connect(null, mapDispatchToProps)(UserForm)