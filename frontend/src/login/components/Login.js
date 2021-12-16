import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginUser from '../actions/loginFetch';
const Login = (props) => {
  const navigate = useNavigate();
  return (
    <a href="/login" alt="Login" onClick={event => {
      event.preventDefault();
      props.loginUser(props.user.name);
      navigate('/me');
    }}>Login</a>
  )
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps, dispatch => ({loginUser: userName => loginUser(dispatch, userName)}))(Login)