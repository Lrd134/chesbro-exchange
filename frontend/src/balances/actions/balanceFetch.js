import indexUrl from '../../helpers/indexUrl'
import { balanceActions as Actions } from '../BalanceImport';
const getBalances = dispatch => {
  dispatch(Actions.initBalances)
  fetch(indexUrl + 'balances').then(resp => resp.json()).then(balances =>
    dispatch(Actions.addBalances(balances))).catch(error => console.log(error));
};
const newBalance = (dispatch, balance = {
  name: "",
  email: ""
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
  dispatch(Actions.newBalanceRequest)
  fetch(indexUrl + 'balances', newBalanceObj).then(resp => resp.json()).then(balance =>
    dispatch(Actions.newBalance(balance))).catch(error => console.log(error));
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
  dispatch(Actions.updateBalanceRequest)
  fetch(indexUrl + 'balances/' + balance.id, updateBalanceObj).then(resp => resp.json()).then(balance => {
    dispatch(Actions.updateBalance(balance))
  }).catch(error => console.log(error));
}

export { getBalances, newBalance, updateBalance }