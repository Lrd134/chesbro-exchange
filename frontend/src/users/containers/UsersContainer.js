import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(user => <User props={user}/>)
    return (
      <div class="user-container">
        <ul class="user-list">
          {renderUsers()}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps)(UsersContainer)