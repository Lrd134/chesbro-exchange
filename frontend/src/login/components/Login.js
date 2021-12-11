import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../LoginImport';

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <a href="/login" alt="Login" onClick={event => {
      event.preventDefault();
      if (props.users.users.filter(user => user.name === props.user.name).length >= 1)  {
        props.loginUser();
        navigate('/me');
      }
      else {
        navigate('/signup')
        alert("Please Signup")
      }
     
    }}>Login</a>
  )
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps, dispatch => ({loginUser: userName => loginUser(dispatch, userName)}))(Login)