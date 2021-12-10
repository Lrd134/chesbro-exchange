import React from 'react';
import { login } from '../UserImport';
const Logout = () => {
  
  login.out()
  return (
    <h1>Attempting to logout...</h1>
  )
}
export default Logout