import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceForm from '../components/BalanceForm';
import Balances from '../components/Balances';

class BalanceContainer extends Component {
  render() {
    return (
      <div>
        <BalanceForm />
        <Balances />
      </div>
    )
  }
}
export default connect()(BalanceContainer)