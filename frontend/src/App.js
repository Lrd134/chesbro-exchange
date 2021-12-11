
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
    
    !this.props.users_requesting && (this.props.users.users.length === 0) ?
      this.props.getUsers() : console.log("Requesting Users...")
    !this.props.balances_requesting && (this.props.balances.balances.length === 0) ?
      this.props.getBalances() : console.log("Requesting balances...")
    !this.props.tokens.requesting && (this.props.tokens.tokens.length === 0) ? this.props.getTokens() : console.log("Requesting tokens...");
    
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
