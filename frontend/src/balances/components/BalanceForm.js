import React from 'react';

const BalanceForm = props => {
  const renderOptions = () => props.tokens.map(({attributes})=> (<option value={attributes.name}>
      {attributes.name}

    </option>))
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        Select Token to Deposit
        <br></br>
        <select name="value-token" onChange={props.handleChange}>
          {renderOptions()}
        </select>
      </label>

      <br>
      </br>

      <label> Deposit Amount
        <br></br>
        <input onSubmit={event => event.preventDefault()} type="number" name="value-balance" required onChange={props.handleChange}/>
      </label>
      
    </form>
  )
}


export default BalanceForm