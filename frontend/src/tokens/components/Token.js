import React from 'react';
import { useNavigate } from 'react-router-dom';
const Token = ({link, token}) => {
  const navigate = useNavigate();
  if (link)
    return (
      <li>
        <a href={`/exchange/${token.ticker}`} alt={token.ticker} onClick={event => {
          event.preventDefault();
          navigate(`/exchange/${token.ticker}`);

        }}>{token.ticker}</a>
      </li>
    )
  else
    return (
      <li>
        {token.ticker}
      </li>
    )
}

export default Token;