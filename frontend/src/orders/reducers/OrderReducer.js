const OrderReducer = (state = {
  orders: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("START_ADDING_ORDERS_REQUEST" || "START_CREATING_ORDER" || "START_UPDATING_ORDER" || "START_DELETING_ORDER"):
      return {...state, requesting: true}
    case("ADD_ORDERS"):
      return {...state, orders: action.orders}
    case("REMOVE_ORDER"):
      return {...state, orders: state.orders, not_finished: true }
    
    case("NEW_ORDER"):{
      if (action.payload.data.id)
        return {...state, orders: state.orders.concat(action.payload.data)}
    }
    // eslint-disable-next-line    
    default:
      return state;

  }
}

export default OrderReducer;