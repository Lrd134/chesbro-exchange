import indexUrl from '../../helpers/indexUrl'
import orderActions from './orderActions';
import { getBalances } from '../../balances/actions/balanceFetch'
const getOrders = () => {
  return dispatch => {
    dispatch(orderActions.initOrders)
    fetch(indexUrl + 'orders').then(resp => resp.json()).then(json =>{
      const orders = json.data;
      dispatch(orderActions.addOrders(orders))
    }).catch(error => console.log(error));
  }
}



const newOrder = payload => {
  return dispatch => {
    const newOrderObj = {
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": '*'
      },
      method: "POST",
      body: JSON.stringify({
              order:{
                      amount: parseFloat(payload.amount),
                      ticker: payload.ticker,
                      user_id: payload.id,
                      sell: payload.sell,
                      completed: 0
              }
            })
    }
    dispatch(orderActions.newOrderRequest)
    fetch(indexUrl + 'orders', newOrderObj)
    .then(resp => resp.json())
    .then(order =>{
      if (order.message)
        alert(order.message);
      else {
        dispatch(orderActions.newOrder(order.data))
        getBalances(dispatch);
      }}).catch(error => console.log(error));
  }
}

export { getOrders, newOrder }
