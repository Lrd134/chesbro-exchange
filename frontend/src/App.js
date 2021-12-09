
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './users/UserImport';

import { Outlet, Link } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    this.props.getUsers();
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
    getUsers: () => getUsers(dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
