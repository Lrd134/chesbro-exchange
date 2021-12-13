import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import RootReducer from './reducers/RootReducer'
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import UserForm from './users/components/UserForm';
import UsersContainer from './users/containers/UsersContainer';
import UserContainer from './users/containers/UserContainer';
import BalancesContainer from './balances/containers/BalancesContainer';
import TokensContainer from './tokens/containers/TokensContainer';
import BalanceContainer from './balances/containers/BalanceContainer';
import LoginForm from './login/components/LoginForm';
import Logout from './login/components/Logout';


// ...
const store = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(RootReducer);
// const store = createStore(RootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>  
      <Routes>
        <Route path="/" element={<App />} >
          {/* <Route path="login" element={<Login />} */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
            <Route path="signup" element={<UserForm/>} />
            <Route path="users" element={<UsersContainer />} />
            <Route path="balances" element={<BalancesContainer />} />
            <Route path="tokens" element={<TokensContainer />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="logout" element={<Logout/>}/>
            <Route path="me" element={<UserContainer />}/>
            <Route path="/deposit" element={<BalanceContainer />}/>
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

