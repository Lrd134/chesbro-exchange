const orderActions = {
  newOrder: (data) => ({ type: "NEW_ORDER", 
    payload: {
      order: data
    }
  }),
  addOrders: orders => ({
    type: "ADD_ORDERS",
    orders
  }),
  removeOrder: id => ({type: "REMOVE_ORDER", payload: id}),
  updateOrder: ({order, id}) => {
    return {type: "UPDATE_ORDER", payload: {
      id,
      order
    }}
  },
  initOrders: {type: "START_ADDING_ORDERS_REQUEST"},
  newOrderRequest: {type: "START_CREATING_ORDER"},
  updateOrderRequest: {type: "START_UPDATING_ORDER"},
  deleteOrderRequest: {type: "START_DELETING_ORDER"}
}
export default orderActions

