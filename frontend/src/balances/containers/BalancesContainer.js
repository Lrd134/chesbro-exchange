import React, { Component } from 'react';
import { connect } from 'react-redux';
import Balance from '../components/Balance';
class BalancesContainer extends Component {

  renderBalances = () => (this.props.balances.map(({attributes}) => <Balance balance={attributes} key={attributes.id.toString()} />));

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