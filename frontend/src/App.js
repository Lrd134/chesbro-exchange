
import './App.css';
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import RootReducer from './root/reducers/RootReducer'
import {
  BrowserRouter as Router,
  Routes } from "react-router-dom";
import myRoutes from './routes.js'
// ...
const store = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(RootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>  
        <Routes>
            {myRoutes()}
        </Routes>
      </Router>
    </Provider>


    );
  }
}
export default App;
