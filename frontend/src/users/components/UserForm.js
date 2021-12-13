import './UserForm.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../actions/userFetch';
import Signup from '../../login/components/Signup';
class UserForm extends Component {
  state = {
    name: "",
    email: "",
    validEmail: false
  }
  handleChange = event => {
    function ValidateEmail(email) 
{
      if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
      {
        return true
      }
        return false
    }
    const key = event.target.name.split("-")[1]
    const value = event.target.value
    if (key === "email")
      this.setState({validEmail: ValidateEmail(event.target.value)})

    this.setState({[key]: value})
  }
  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup container">
        <form onSubmit={this.handleSubmit} className="user form">
          <input onChange={this.handleChange} name="user-name" type="text" className="user input"/><br></br>
          <input onChange={this.handleChange} name="user-email" type="text" className="user input"/><br></br><br></br>
          <Signup user={this.state}/>
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