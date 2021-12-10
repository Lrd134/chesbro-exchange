
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, login } from './users/UserImport';
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
        {login.current() ? <Link to="/me">Profile</Link> : <Link to="/signup">Signup</Link>}
        {login.current() ? <Link to="/deposit">Deposit</Link> : <Link to="/login">Login</Link>}
        {login.current() ? <Link to="/logout">Logout</Link> : <Link to="/about">About</Link>}
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
export default connect(null, mapDispatchToProps)(App);
