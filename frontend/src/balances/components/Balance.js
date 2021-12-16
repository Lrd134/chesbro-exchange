import React from 'react';

const Balance = ({balance}) => {
  return (
    <li>
      {balance.token.ticker}: {balance.balance}
    </li>
  )
}

export default Balance;