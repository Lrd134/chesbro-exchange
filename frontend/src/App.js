import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { UsersContainer, UserForm } from './users/UserImport';
import {
  Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/users" element={<UsersContainer/>}/>
      <Route exact path="/signup" element={<UserForm/>}/>
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
    </div>
  );
}

export default connect()(App);
