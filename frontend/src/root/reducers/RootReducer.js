import { combineReducers } from 'redux';
import UserReducer from '../../users/reducers/UserReducer';
import TokenReducer from '../../tokens/reducers/TokenReducer';
import BalanceReducer from '../../balances/reducers/BalanceReducer';
import LoginReducer from '../../login/reducers/LoginReducer';
import OrderReducer from '../../orders/reducers/OrderReducer.js'
const RootReducer = combineReducers({
  users: UserReducer,
  balances: BalanceReducer,
  tokens: TokenReducer,
  orders: OrderReducer,
  current_user: LoginReducer

})

export default RootReducer
