import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../UserImport';
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
    this.props.addUser(this.state)
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="user-name" type="text" className="name-input"/>
          <input onChange={this.handleChange} name="user-email" type="text" className="email-input"/>
          <input type="submit" className="user-submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
 return {
   addUser: state => {
     dispatch(userActions.addUser(state))
   }
 }
}
export default connect(null, mapDispatchToProps)(UserForm)