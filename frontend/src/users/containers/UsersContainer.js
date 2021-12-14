import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(({attributes}) => <User key={attributes.id} user={attributes}/>)
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