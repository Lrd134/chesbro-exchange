const OrderReducer = (state = {
  orders: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("START_ADDING_ORDERS_REQUEST" || "START_CREATING_ORDER" || "START_UPDATING_ORDER" || "START_DELETING_ORDER"):
      return {...state, requesting: true}
    case("NEW_ORDER"):
      return {...state, orders: state.orders.concat(action.payload)}
    case("REMOVE_ORDER"):
      return {...state, orders: state.orders, not_finished: true }
    default:
      return state;

  }
}