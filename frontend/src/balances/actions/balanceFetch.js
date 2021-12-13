import indexUrl from '../../helpers/indexUrl'
import balanceActions from './balanceActions';
const getBalances = dispatch => {
  dispatch(balanceActions.initBalances)
  fetch(indexUrl + 'balances').then(resp => resp.json()).then(balances =>
    dispatch(balanceActions.addBalances(balances))).catch(error => console.log(error));
};
const newBalance = (dispatch, state = {
  token: "Bitcoin",
  balance: 0.0
}, user
}) => {
  const newBalanceObj = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": '*'
    },
    method: "POST",
    body: JSON.stringify({
            balance: {
                    name: balance.name,
                    email: balance.email
            }
          })
  }
  dispatch(balanceActions.newBalanceRequest)
  fetch(indexUrl + 'balances', newBalanceObj).then(resp => resp.json()).then(balance =>
    dispatch(balanceActions.newBalance(balance))).catch(error => console.log(error));
}
const updateBalance = (dispatch, balance) => {
  const updateBalanceObj = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": '*'
    },
    method: "PATCH",
    body: 
      JSON.stringify({
        balance: {
          name: balance.name,
          email: balance.email
        }
      })}
  dispatch(balanceActions.updateBalanceRequest)
  fetch(indexUrl + 'balances/' + balance.id, updateBalanceObj).then(resp => resp.json()).then(balance => {
    dispatch(balanceActions.updateBalance(balance))
  }).catch(error => console.log(error));
}

export { getBalances, newBalance, updateBalance }
