import React from 'react';
import Balance from './Balance';

const Balances = (props) => {
  const renderBalances = () => {

    const balances = props.balances.map(balance => <Balance balance={balance}/>)
      return balances
  }
  return (
    <div>
      {renderBalances()}
    </div>
  )
}

export default Balances;