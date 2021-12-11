import { UserReducer } from '../users/UserImport';
import { BalanceReducer } from '../balances/BalanceImport';
import { TokenReducer } from '../tokens/TokenImport';
import { combineReducers } from 'redux';
import { LoginReducer } from '../login/LoginImport';
const RootReducer = combineReducers({
  users: UserReducer,
  balances: BalanceReducer,
  tokens: TokenReducer,
  current_user: LoginReducer
})

export default RootReducer
