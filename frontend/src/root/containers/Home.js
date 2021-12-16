import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet } from "react-router-dom";
import NavBar from '../../NavBar';
import { getUsers } from '../../users/actions/userFetch';
import { getBalances } from '../../balances/actions/balanceFetch';
import { getTokens } from '../../tokens/actions/tokenFetch';
import { getOrders } from '../../orders/actions/orderFetch';
class Home extends Component {
  componentDidMount() {
    
    !this.props.users_requesting && (this.props.users.users.length === 0) ?
      this.props.getUsers() : console.log("Requesting Users...")
    !this.props.balances_requesting && (this.props.balances.balances.length === 0) ?
      this.props.getBalances() : console.log("Requesting balances...")
    !this.props.tokens.requesting && (this.props.tokens.tokens.length === 0) ? this.props.getTokens() : console.log("Requesting tokens...");
    !this.props.orders.requesting && (this.props.orders.orders.length === 0) ? this.props.getOrders() : console.log("Requesting orders...");
  }
  render() {
    return (
      <div className="App">
        <NavBar props={{current_user: this.props.current_user.current_user}}/>
        <Outlet />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => getUsers(dispatch),
    getBalances: () => getBalances(dispatch),
    getTokens: () => getTokens(dispatch),
    getOrders: () => getOrders(dispatch)
  }
}
const mapStateToProps = ({current_user, users, tokens, balances, orders}) => {
  return {
    tokens,
    balances,
    users,
    orders,
    current_user,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);