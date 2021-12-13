import React from 'react';
import Balance from './Balance';

const Balances = (props) => {
  const renderBalances = () => {
    const balances = props.balances.map(balance => <Balance key={balance.id} balance={balance}/>)
    if (balances.length < 1) {
      return (<Balance balance={{
        balance: "No Deposits Found"
      }}/>)
    }
    else
      return balances
  }
  return (
    <div>
      {renderBalances()}
    </div>
  )
}

export default Balances;