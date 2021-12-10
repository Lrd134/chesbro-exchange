import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Balance } from '../BalanceImport';
class BalancesContainer extends Component {

  renderBalances = () => (this.props.balances.map(balance => <Balance balance={balance} />));

  render() {
    return (
      <div className="balance container">
        <ul>{this.renderBalances()}</ul>        
      </div>
    )
  }
}
const mapStateToProps = ({balances}) => ({
  balances: balances.balances
})

export default connect(mapStateToProps)(BalancesContainer)