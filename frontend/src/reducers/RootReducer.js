import { userReducer } from '../users/UserImport';
import { BalanceReducer } from '../balances/BalanceImport';
import { combineReducers } from 'redux';
const RootReducer = combineReducers({
  users: userReducer,
  balances: BalanceReducer
})

export default RootReducer
