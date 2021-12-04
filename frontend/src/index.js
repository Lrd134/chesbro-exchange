import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import UsersContainer from './users/containers/UsersContainer';
import UserReducer from './users/reducers/UserReducer';
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
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

