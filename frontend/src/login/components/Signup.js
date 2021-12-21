import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newUser } from '../../users/actions/userFetch';
const Signup = (props) => {
  const navigate = useNavigate();
  return (
    <a href="Signup" alt="Signup" onClick={event => {
      event.preventDefault();
      if(props.user.validEmail) {
        props.newUser(props.user);
        navigate('/me');
      }
      else
        alert("Invalid email entered.")
    }}>Signup</a>
  )
}
const mapStateToProps = state => {
  return {
    users: state.users,
    current_user: state.current_user
  }
}
export default connect(mapStateToProps, dispatch => ({newUser: user => dispatch(newUser(user))}))(Signup)