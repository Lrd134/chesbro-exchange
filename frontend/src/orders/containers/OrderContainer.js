import React, { Component } from 'react';
import { connect } from 'react-redux';
import orderActions from '../actions/orderActions';
import Order from '../components/Order';
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
        </div>
      )
    else
      return (
        <h1> Please Login </h1>
      )
  }
}
const mapStateToProps = ({current_user}) => ({
  current_user: current_user.current_user
})
const mapDispatchToProps = dispatch => ({
  sellToken: (amount, userId, tokenTicker) => dispatch(orderActions.newOrder(amount, userId, tokenTicker))
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);