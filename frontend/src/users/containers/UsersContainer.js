import React, { Component } from 'react';
import { fetchUsers } from '../UserImport';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(user => <Link to={`${user.id}`} key={user.id}>{user.name}<br></br></Link>)
    if (this.props.users.length === 0)
      this.props.fetchUsers();
    return (
      <div className="user-container">
        <ul className="user-list">
          {renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ fetchUsers: () => dispatch(fetchUsers()) })

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)