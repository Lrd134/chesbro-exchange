import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
  let params = useParams();
  return (
    <li>{params.userId}</li>
  )  
}


export default User;