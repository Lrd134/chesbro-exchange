import React from 'react';
import { connect } from 'react-redux';

const BalanceForm = props => {
  return (
    <div>
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

    </div>
    </form>
  )
}


export default connect()(BalanceForm)