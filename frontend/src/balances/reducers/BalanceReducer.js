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
      const {name, email, id} = action.payload;
      const balance = {
        name,
        email,
        id
      }
      window.sessionStorage.setItem("logged_in", JSON.stringify({balance}))
      
      return {...state, balances: state.balances.concat(balance)}
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