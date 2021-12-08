import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
const User = ({users}) => {


    const id = parseInt(useParams().userId, 10)
    const user = users.find(user => user.id === id)
    if (user)
      return (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.id}</h2>
        </div>
      )
    else
      return (
        <div>
          No User Found With ID: {id}
        </div>
      )
}

const mapStateToProps = ({users}) => {
  return {
    users: users.users
  }

}

export default connect(mapStateToProps)(User);