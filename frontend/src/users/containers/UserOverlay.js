import React from 'react';
import { Link } from 'react-router-dom';
const UserOverlay = () => {
  const {user} = JSON.parse(window.sessionStorage.getItem('logged_in'))
  return (
  <div>
    <Link to="/u/exchange">Exchange</Link>
    <Link to="/u/balances">Balances</Link>
    <Link to="/u/me">{user.name}</Link>
  </div>
)}
export default UserOverlay;