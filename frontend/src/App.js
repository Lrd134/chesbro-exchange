
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers} from './users/UserImport';
import { getTokens } from './tokens/TokenImport';
import { Outlet, Link } from "react-router-dom";
import { getBalances } from './balances/BalanceImport';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getBalances();
    this.props.getTokens();
  }
  render() {
    return (
      <div className="App">

        <Link to="/users">Users</Link>
        <Link to="/balances">Balances</Link>
        <Link to="/tokens">Tokens</Link>
        {this.props.current_user ? <Link to="/me">Profile</Link> : <Link to="/signup">Signup</Link>}
        {this.props.current_user ? <Link to="/deposit">Deposit</Link> : <Link to="/login">Login</Link>}
        {this.props.current_user ? <Link to="/logout">Logout</Link> : <Link to="/about">About</Link>}
        <Outlet />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => getUsers(dispatch),
    getBalances: () => getBalances(dispatch),
    getTokens: () => getTokens(dispatch)
  }
}
const mapStateToProps = ({current_user}) => {
  return {
    current_user: current_user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
