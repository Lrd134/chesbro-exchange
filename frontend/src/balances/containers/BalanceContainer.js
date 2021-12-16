import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceForm from '../components/BalanceForm';
import Balances from '../components/Balances';
import Deposit from '../components/Deposit';
import { newBalance } from '../actions/balanceFetch'
import '../BalanceContainer.css'
class BalanceContainer extends Component {
  state = {
    token: "Dollar",
    balance: 0.0
  }
  
  balances = () => this.props.balances.filter(({attributes}) => parseInt(attributes.user.id, 10) === parseInt(this.props.current_user.user.id, 10))
  
  handleChange = event => {
    const value = event.target.value
    const key = event.target.name.split('-')[1];
    this.setState({
      [key]: value
    })
  }
  render() {
    const data = () => {
      return {
        token: this.props.tokens.find(({attributes}) => attributes.name === this.state.token).id,
        balance: this.state.balance
      }
    }
    if (this.props.current_user.user)
      return (
        <div className="deposit-form">
          <BalanceForm tokens={this.props.tokens} handleChange={this.handleChange} />
          <Deposit deposit={() => this.props.deposit(data(), this.props.current_user.user)}/>
          <label> Your Balances: 
          <Balances balances={this.balances()}/>
          </label>
        </div>
      )
    else
      return (<h1>Please Login.</h1>)
  }
}
const mapStateToProps = ({current_user, balances, tokens}) => {
  return {
    balances: balances.balances,
    tokens: tokens.tokens,
    current_user: current_user.current_user
  }
}
const mapDispatchToProps = dispatch => {
  return ({
    deposit: (state, user) => newBalance(dispatch, state, user)
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer)