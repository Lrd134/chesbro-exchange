import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Outlet, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/users">Users</Link>
        <Link to="/signup">Signup</Link>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Outlet />
      </div>
    );
  }
}

export default connect()(App);
