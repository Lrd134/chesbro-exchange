import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceForm from '../components/BalanceForm';
import Balances from '../components/Balances';

class BalanceContainer extends Component {
  balances = () => {
    this.props.balances.balances.filter(balance => balance.user_id === this.props.current_user.current_user.id)
  state = {
    token: "Bitcoin",
    balance: 0.0
  }
  balances = () => this.props.balances.balances.filter(balance => balance.user_id === this.props.current_user.current_user.user.id)
  
  handleChange = event => {
    const value = event.target.value
    const key = event.target.name.split('-')[1];
    this.setState({
      [key]: value
    })
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
          <BalanceForm tokens={this.props.tokens} handleChange={this.handleChange} />
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
    tokens: state.tokens,
    current_user: state.current_user
  }
}
export default connect(mapStateToProps)(BalanceContainer)