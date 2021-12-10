import React, { Component } from 'react';
import { User } from '../UserImport';
import { connect } from 'react-redux';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(user => <User user={user}/>)
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