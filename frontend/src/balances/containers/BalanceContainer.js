import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceForm from '../components/BalanceForm';
import Balances from '../components/Balances';

class BalanceContainer extends Component {
  balances = () => {
    this.props.balances.balances.filter(balance => balance.user_id === this.props.current_user.current_user.id)
  balances = () => this.props.balances.balances.filter(balance => balance.user_id === this.props.current_user.current_user.user.id)
  }
  render() {
    return (
      <div>
        <BalanceForm />
        <Balances balances={this.balances()}/>
      </div>
    )
    if (this.props.current_user.current_user.user)
      return (
        <div>
          <label> Your Balances: 
          <Balances balances={this.balances()}/>
          </label>
        </div>
      )
    else
      return (<h1>Please Login.</h1>)
  }
}
const mapStateToProps = state => {
  return {
    balances: state.balances,
    current_user: state.current_user
  }
}
export default connect(mapStateToProps)(BalanceContainer)