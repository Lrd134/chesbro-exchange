import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderContainer extends Component {
  handleSubmit = event => {
    event.preventDefault()

  }
  handleChange = event => {
    this.setState({
      [event.target.name.split('-')[1]]: event.target.value
    })
  }
  render () {
    return (
      <div className='order-container'>
        <Order handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default connect()(OrderContainer);