import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Users.css';
import User from '../components/User';
class UsersContainer extends Component {
  
  render() {
    const renderUsers = () => this.props.users.map(({attributes}) => <User key={attributes.id} user={attributes}/>)
    return (
      <React.Fragment>
        <h2 id="users">Users</h2>
        <div className="user-container">
          <ul className="user-list">
            {renderUsers()}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    users: users.users
  }
}
export default connect(mapStateToProps)(UsersContainer)