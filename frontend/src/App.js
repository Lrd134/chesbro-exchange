
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './users/UserImport';

import { Outlet, Link } from "react-router-dom";
import { getBalances } from './balances/BalanceImport';
class App extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getBalances();
  }
  render() {
    return (
      <div className="App">
        <Link to="/users">Users</Link>
        <Link to="/signup">Signup</Link>
        <Outlet />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => getUsers(dispatch),
    getBalances: () => getBalances(dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
