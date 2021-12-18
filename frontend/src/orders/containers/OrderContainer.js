import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';
import Orders from '../components/Orders';
import { newOrder } from '../actions/orderFetch';
import '../Orders.css';
class OrderContainer extends Component {
  state = {
    amounts: {
      buy: 0,
      sell: 0
    }
  }
  handleSell = ticker => {
    this.props.sellToken(this.state.amounts.sell, this.props.current_user.user.id, ticker)
  }
  handleBuy = ticker => {
    this.props.buyToken(this.state.amounts.buy, this.props.current_user.user.id, ticker)
  }
  handleChange = event => {
    this.setState(prevState => ({
      ...prevState,
      amounts: {
        ...prevState.amounts,
        [event.target.name]: event.target.value
      }
    }))
  }
  render () {
    if (this.props.current_user.user) 
      return (
        <div className='order-container'>
          <Order handleSell={this.handleSell} handleBuy={this.handleBuy} handleChange={this.handleChange} amounts={this.state.amounts} current_user={this.props.current_user}/>
          <Orders tokens={this.props.tokens} orders={this.props.orders}/>
        </div>
      )
    else
      return (
        <h1> Please Login </h1>
      )
  }
}
const mapStateToProps = ({current_user, tokens, orders}) => ({
  current_user: current_user.current_user,
  tokens: tokens.tokens,
  orders: orders.orders
})
const mapDispatchToProps = dispatch => ({
  sellToken: (amount, userId, tokenTicker) => {
    const payload = {
      amount: amount,
      id: userId,
      ticker: tokenTicker,
      sell: 1
    }
    newOrder(dispatch, payload)
  },
  buyToken: (amount, userId, tokenTicker) => {
    const payload = {
      amount: amount,
      id: userId,
      ticker: tokenTicker,
      sell: 0
    }
    newOrder(dispatch, payload)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);