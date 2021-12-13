import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceForm from '../components/BalanceForm';
import Balances from '../components/Balances';

class BalanceContainer extends Component {
  balances = () => {
    this.props.balances.balances.filter(balance => balance.user_id === this.props.current_user.current_user.id)
  }
  render() {
    return (
      <div>
        <BalanceForm />
        <Balances balances={this.balances()}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    balances: state.balances,
    current_user: state.current_user
  }
}
export default connect(mapStateToProps)(BalanceContainer)