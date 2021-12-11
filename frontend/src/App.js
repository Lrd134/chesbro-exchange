
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers} from './users/UserImport';
import { getTokens } from './tokens/TokenImport';
import { Outlet } from "react-router-dom";
import { getBalances } from './balances/BalanceImport';
import NavBar from './NavBar';

class App extends Component {

  componentDidMount() {
    this.props.getUsers();
    this.props.getBalances();
    this.props.getTokens();
    
  }
  render() {
    return (
      <div className="App">

        <NavBar props={{current_user: this.props.current_user.current_user}}/>
        <Outlet />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => getUsers(dispatch),
    getBalances: () => getBalances(dispatch),
    getTokens: () => getTokens(dispatch)
  }
}
const mapStateToProps = ({current_user, users, tokens, balances}) => {
  return {
    tokens,
    balances,
    users,
    current_user,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
