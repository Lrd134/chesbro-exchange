import React from 'react';

const Balance = ({balance}) => {
  if (balance.token)
    return (
      <li>
        {balance.token.ticker}: {balance.balance}
      </li>
    )
  else
    return (
      <li>
        {balance.balance}
      </li>
    )
}

export default Balance;