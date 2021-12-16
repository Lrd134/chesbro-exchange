import React from 'react'
import { useParams } from 'react-router-dom';

const Orders = props => {
  const params = useParams();
  const filterToken = () => props.tokens.filter(({attributes}) => attributes.ticker === params.ticker)
  const token = filterToken()[0];
  const filterBuys = () => props.orders.filter(({attributes}) => parseInt(attributes.token.id, 10) === parseInt(token.id, 10) && attributes.sell === false && !attributes.completed  )
  const filterSells = () => props.orders.filter(({attributes}) => parseInt(attributes.token.id, 10) === parseInt(token.id, 10) && attributes.sell === true && !attributes.completed )
  const buys = filterBuys();
  const sells = filterSells();
  const renderBuys = () => buys.map(({attributes}) => <li key={attributes.id} name="current-order">{attributes.amount}</li>)
  const renderSells = () => sells.map(({attributes}) => <li key={attributes.id} name="current-order">{attributes.amount}</li>)
  return (
    <div className="orders-container">
      <div className="buy-orders-container">
      <h1>Buy</h1>
        <ul>
          {renderBuys()}
        </ul>
      </div>
      <div className="sell-orders-container">
        <h1>Sells</h1>
        <ul>
          {renderSells()}
        </ul>
      </div>
      
    </div>
  )
}

export default Orders