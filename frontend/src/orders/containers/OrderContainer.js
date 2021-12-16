import React, { Component } from 'react';
import { connect } from 'react-redux';
import orderActions from '../actions/orderActions';
import Order from '../components/Order';
class OrderContainer extends Component {
  handleSell = ticker => {
    this.props.sellToken(this.state.amounts.sell, this.props.current_user.user.id, ticker)
  }
  handleBuy = ticker => {

  }
  handleChange = event => {
  }
  render () {
    return (
      <div className='order-container'>
        <Order handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}

