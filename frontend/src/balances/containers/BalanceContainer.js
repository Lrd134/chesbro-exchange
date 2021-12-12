import React, { Component } from 'react';
import { connect } from 'react-redux';
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