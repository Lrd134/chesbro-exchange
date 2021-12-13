import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(user => <User key={user.id} user={user}/>)
    return (
      <div className="user-container">
        <ul className="user-list">
          {renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    users: users.users
  }
}
export default connect(mapStateToProps)(UsersContainer)