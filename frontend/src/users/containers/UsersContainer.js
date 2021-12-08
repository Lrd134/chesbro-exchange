import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(user => <Link to={`${user.id}`} key={user.id}>{user.name}<br></br></Link>)
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