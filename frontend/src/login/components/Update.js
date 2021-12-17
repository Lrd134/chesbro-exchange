import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Update = (props) => {
  const navigate = useNavigate();
  return (
    <a href="Update" alt="Update" onClick={event => {
      event.preventDefault();
      if(props.user.validEmail) {
        props.updateUser(props.user, props.current_user.user.id);
        navigate('/me');
      }
      else
        alert("Invalid email entered.")
    }}>Update</a>
  )
}
export default connect()(Update)