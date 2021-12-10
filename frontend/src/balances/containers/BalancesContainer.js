import React, { Component } from 'react';
import { connect } from 'react-redux';
import Balance from '../BalanceImport';
class BalancesContainer extends Component {

  renderBalances = () => (this.props.balances.map(balance => <Balance balance={balance} />));

  render() {
    return (
      <div className="balance container">
        {this.renderBalances()}
      </div>
    )
  }
}


export default connect()(BalancesContainer)