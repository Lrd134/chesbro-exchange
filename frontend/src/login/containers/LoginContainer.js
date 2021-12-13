import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
class LoginContainer extends Component {
  render() {
    return (
      <LoginForm />
    )
  }
}

export default connect()(LoginContainer)