import indexUrl from '../../helpers/indexUrl'
import orderActions from './orderActions';
const getOrders = dispatch => {
  dispatch(orderActions.initOrders)
  fetch(indexUrl + 'orders').then(resp => resp.json()).then(json =>{
    const orders = json.data;
    dispatch(orderActions.addOrders(orders))
  }).catch(error => console.log(error));
};



const sellOrder = (dispatch, payload) => {
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
                    token_id: payload.token_id,
                    user_id: payload.id
            }
          })
  }
  dispatch(orderActions.newOrderRequest)
  fetch(indexUrl + 'orders', newOrderObj)
  .then(resp => resp.json())
  .then(order =>
    dispatch(orderActions.newOrder(order.data))).catch(error => console.log(error));
}

export { getOrders, sellOrder }
