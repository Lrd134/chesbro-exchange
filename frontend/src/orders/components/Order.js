import React from 'react';
import SubmitOrder from './SubmitOrder';
const Order = ({handleSell, handleBuy, handleChange, amounts}) => {
  return (
    <div className="order-component">
      <br></br>
      <br></br>
      <form className="buy-form">
          <input onChange={handleChange} name="buy" value={amounts.buy} type="number"/>
          <SubmitOrder handleSubmit={handleBuy} text="Buy"/>
      </form>
      <form className="sell-form">
          <input onChange={handleChange} name="sell" type="number" value={amounts.sell}/>
          <SubmitOrder handleSubmit={handleSell} text={"Sell"}/>
      </form>
    </div>
  )
}

export default Order;