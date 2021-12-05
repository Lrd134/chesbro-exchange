import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import RootReducer from './reducers/RootReducer'
import { UsersContainer, UserForm } from './users/UserImport';
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";


// ...

const initialState = { counter: { count:0 } };
const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(RootReducer, initialState);
// const store = createStore(RootReducer, applyMiddleware(thunk));

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

