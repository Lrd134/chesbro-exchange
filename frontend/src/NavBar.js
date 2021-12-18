import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component} from 'react';
import Logout from './login/components/Logout';
class NavBar extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Link to="/users">Users</Link>
        <Link to="/exchange">Exchange</Link>
        {this.props.props.current_user.user ? <Link to="/me">Profile</Link> : <Link to="/signup">Signup</Link>}
        {this.props.props.current_user.user ? <Link to="/deposit">Deposit</Link> : <Link to="/login">Login</Link>}
        {this.props.props.current_user.user ? <Logout/> : null}
      </React.Fragment>
    )
  }
}
export default connect()(NavBar)