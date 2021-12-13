const balanceActions = {
  newBalance: (data) => ({ type: "NEW_BALANCE", 
    payload: {
      balance: data
    }
  }),
  addBalances: balances => ({
    type: "ADD_BALANCES",
    balances
  }),
  removeBalance: id => ({type: "REMOVE_BALANCE", payload: id}),
  updateBalance: ({balance, id}) => {
    return {type: "UPDATE_BALANCE", payload: {
      id,
      balance
    }}
  },
  initBalances: {type: "START_ADDING_BALANCES_REQUEST"},
  newBalanceRequest: {type: "START_CREATING_BALANCE"},
  updateBalanceRequest: {type: "START_UPDATING_BALANCE"},
  deleteBalanceRequest: {type: "START_DELETING_BALANCE"}
}
export default balanceActions