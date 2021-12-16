import React from 'react';
import { useParams } from 'react-router-dom';

const SubmitOrder = ({handleSubmit, text}) => {
  const params = useParams();
  return (
    <a href="/orders/new" alt="/orders/new" onClick={event => {
      event.preventDefault()
      handleSubmit(params.ticker);
    }}>{text}</a>
  )
}

export default SubmitOrder