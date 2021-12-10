
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './users/UserImport';
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
        {window.sessionStorage.getItem("loggedIn") ? <Link to="/me">Profile</Link> : <Link to="/signup">Signup</Link>}
        {window.sessionStorage.getItem("loggedIn") ? null : <Link to="/login">Login</Link>}
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
