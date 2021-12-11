import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../LoginImport';

const Login = (props) => {
  debugger;
  const navigate = useNavigate();
  return (
    <a href="/login" alt="Login" onClick={event => {
      event.preventDefault();
      props.loginUser(props.user.name);
      navigate('/me');
    }}>Login</a>
  )
}

export default connect(null, dispatch => ({loginUser: userName => loginUser(dispatch, userName)}))(Login)