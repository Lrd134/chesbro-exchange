import React from 'react';

const BalanceForm = props => {
  const renderOptions = () => props.tokens.tokens.map(({attributes})=> (<option value={attributes.name}>
      {attributes.name}

    </option>))
  return (
    <form  onSubmit={event => event.preventDefault()}>
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
        <input type="number" name="value-balance" min="0.001" required onChange={props.handleChange}/>
      </label>
      
    </form>
  )
}


export default BalanceForm