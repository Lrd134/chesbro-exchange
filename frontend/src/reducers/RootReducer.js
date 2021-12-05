import { UserReducer } from '../users/UserImport';
import { BalanceReducer } from '../balances/BalanceImport';
import { combineReducers } from 'redux';
const RootReducer = combineReducers({
  users: UserReducer,
  balances: BalanceReducer
})

export default RootReducer
