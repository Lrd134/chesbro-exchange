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
    if (this.props.current_user.current_user.user)
      return (
        <div className="App">
          <NavBar props={{current_user: this.props.current_user.current_user}}/>
          <Outlet />
        </div>
      )
    else
      return (
        <div className="App">
          <NavBar props={{current_user: this.props.current_user.current_user}}/>
            <h1>Welcome to Chesbro's Exchange</h1>
            <h3>If you're new here please signup.</h3>
            <h3>Please click buttons at the top to navigate around.</h3>
          <Outlet />
        </div>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getBalances: () => dispatch(getBalances()),
    getTokens: () => dispatch(getTokens()),
    getOrders: () => dispatch(getOrders())
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