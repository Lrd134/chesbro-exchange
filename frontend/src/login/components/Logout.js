import React from 'react';
import { connect } from 'react-redux';
import { loginActions } from '../LoginImport';
const Logout = props => {

  props.logout();
  return (
    <h1>Attempting to logout...</h1>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(loginActions.logoutUserRequest)
      dispatch(loginActions.logoutUser)
    }
  }
}
export default connect(null, mapDispatchToProps)(Logout)