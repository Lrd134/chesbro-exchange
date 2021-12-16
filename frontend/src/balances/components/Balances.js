import React from 'react';
import Balance from './Balance';

const Balances = (props) => {
  const renderBalances = () => {
    const balances = props.balances.map(({attributes}) => <Balance key={attributes.id} balance={attributes}/>)
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