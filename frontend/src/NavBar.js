import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/users">Users</Link>
        <Link to="/balances">Balances</Link>
        <Link to="/tokens">Tokens</Link>
        {this.props.props.current_user.user ? <Link to="/me">Profile</Link> : <Link to="/signup">Signup</Link>}
        {this.props.props.current_user.user ? <Link to="/deposit">Deposit</Link> : <Link to="/login">Login</Link>}
        {this.props.props.current_user.user ? <Link to="/logout">Logout</Link> : <Link to="/about">About</Link>}
      </React.Fragment>
    )
  }
}
export default connect()(NavBar)