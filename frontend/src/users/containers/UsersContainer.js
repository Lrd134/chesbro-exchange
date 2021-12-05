import React, { Component } from 'react';
import { User, fetchUsers } from '../UserImport';
import { connect } from 'react-redux';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(user => <User props={user}/>)
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