import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import loginActions from '../actions/loginActions';
const Logout = props => {
  const navigate = useNavigate();
  return (
    <a onClick={event=>{
      event.preventDefault();
      props.logout();
      navigate('/');
    }} href="/logout" alt="logout">Logout</a>
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