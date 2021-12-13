import React from 'react';
const Deposit = props => {
  return (
    <a href="Deposit" alt="Deposit" onClick={event => {
      event.preventDefault();
      props.deposit(props)
    }}>Deposit</a>
  )
}

export default Deposit