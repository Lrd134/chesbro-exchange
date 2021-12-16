import React from 'react'
import { useParams } from 'react-router-dom';

const Orders = props => {
  const params = useParams();
  const filterToken = () => props.tokens.filter(({attributes}) => attributes.ticker === params.ticker)
  const token = filterToken()[0];
  const filterBuys = () => props.orders.filter(({attributes}) => attributes.token_id === token.attributes.id && attributes.sell === false )
  const filterSells = () => props.orders.filter(({attributes}) => attributes.token_id === token.attributes.id && attributes.sell === true )
  const buys = filterBuys();
  const sells = filterSells();
  const renderBuys = () => {
    buys.map(({attributes}) => <td key={attributes.id} name="current-order">{attributes.amount}</td>)
  }
  const renderSells = () => {
    sells.map(({attributes}) => <td key={attributes.id} name="current-order">{attributes.amount}</td>)
  }
  return (
    <div className="orders-container">
      <div className="buy-orders-container">
      <h1>Buy</h1>
      <table>
        <tr>
          <th>
            Amount
          </th>
        </tr>
        <td>
          {renderBuys()}
        </td>
      </table>
      </div>
      <div className="sell-orders-container">
        <h1>Sells</h1>
        <table>
          <tr>
            <th>
              Amount
            </th>
          </tr>
          <td>
            {renderSells()}
          </td>
        </table>
      </div>
      
    </div>
  )
}

export default Orders