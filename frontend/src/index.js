import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import RootReducer from './reducers/RootReducer'
import { UsersContainer, UserForm, UserContainer } from './users/UserImport';
import { LoginForm, Logout } from './login/LoginImport'
import { BalancesContainer } from './balances/BalanceImport';
import { TokensContainer } from './tokens/TokenImport';
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";


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
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

