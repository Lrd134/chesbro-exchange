import React from 'react';
import TokensContainer from '../../tokens/containers/TokensContainer';

const Exchange = props => {
  return (
    <div className="exchange-container">
      <h1>Choose a Currency to Trade With</h1>
      <TokensContainer showLink={true}/>
    </div>
  )
}
export default Exchange