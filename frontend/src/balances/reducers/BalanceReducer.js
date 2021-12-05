import uuid from 'uuid';
const BalanceReducer = (state = {
  balances: [],
  requesting: false,
}, action = {
  type: "SEND_BALANCE_DATA_REQUEST",
}) => {
  switch(action.type){
    case("SEND_BALANCE_DATA_REQUEST"):
      return {...state, requesting: true}
    case("ADD_BALANCE"):
      const balance = {
        balance: action.payload,
        id: uuid()
      }
      const newState = {...state, balances: state.balances.concat(balance)}
      return newState
    case("REMOVE_BALANCE"):
      const remainingBalances = state.balances.filter(balance => balance.id !== action.payload)
      return {...state, remainingBalances}
    case("UPDATE_BALANCE"):
      let updatedBalances = state.balances.map(balance => {
        if(balance.id === action.payload.id)
          return Object.assign({}, balance, action.payload);
        else
          return balance;
      })
      return {...state, updatedBalances}
    default:
      return state;
  }
}

export default BalanceReducer