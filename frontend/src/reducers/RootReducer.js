import { userReducer } from '../users/UserImport';
import { BalanceReducer } from '../balances/BalanceImport';
import { TokenReducer } from '../tokens/TokenImport';
import { combineReducers } from 'redux';
const RootReducer = combineReducers({
  users: userReducer,
  balances: BalanceReducer,
  tokens: TokenReducer
})

export default RootReducer
