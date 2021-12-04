import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { UsersContainer, UserReducer, UserForm } from './users/UserImport';
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
const store = createStore(UserReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>  
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/users" element={<UsersContainer/>}/>
        <Route exact path="/signup" element={<UserForm/>}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

