const BalanceActions = {
  addBalance: ({balance}) => ({
    type: "ADD_BALANCE",
    payload: balance
  }),
  removeBalance: ({id}) => ({
    type: "REMOVE_BALANCE",
    payload: id
  }),
  updateBalance: ({balance, id}) => ({
    type: "UPDATE_BALANCE",
    payload: {
      balance,
      id
    }
  }),
  initBalances: {type: "SEND_BALANCE_DATA_REQUEST"}
}

export default BalanceActions