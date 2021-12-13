const balanceReducer = (state = {
  balances: [],
  requesting: false,
}, action) => {
  switch(action.type){
    case("SEND_BALANCE_DATA_REQUEST" || "START_UPDATING_BALANCE" || "START_CREATING_BALANCE" || "START_DELETING_BALANCE"):
      return {...state, requesting: true}
    case("ADD_BALANCES"):
    {
      return {...state, balances: state.balances.concat(action.balances)}
    }
    case("NEW_BALANCE"): {      
      return {...state, balances: state.balances.concat(action.payload.balance)}
    }
    case("REMOVE_BALANCE"):
      const remainingBalances = state.balances.filter(balance => balance.id !== action.payload)
      return {...state, remainingBalances}
    case("UPDATE_BALANCE"):
      let updatedBalances = state.balances.map(balance => {

        if(balance.id === action.payload.id)
          return Object.assign({}, action.payload);
        else
          return balance;
      })
      return {...state, updatedBalances}
    default:
      return state;
  }
}

export default balanceReducer