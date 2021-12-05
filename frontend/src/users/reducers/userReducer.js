import { v1 as uuid } from 'uuid';
const userReducer = (state = {
  users: [],
  requesting: false,
}, action) => {
  switch(action.type){
    case("SEND_USER_DATA_REQUEST"):
      return {...state, requesting: true}
    case("ADD_USER"):
      const {name, email} = action.payload;
      const user = {
        name,
        email,
        id: uuid()
      }
      const newState = {...state, users: state.users.concat(user)}
      window.history.pushState(newState, "/users", "/users");
      return newState
    case("REMOVE_USER"):
      const remainingUsers = state.users.filter(user => user.id !== action.payload)
      return {...state, remainingUsers}
    case("UPDATE_USER"):
      let updatedUsers = state.users.map(user => {
        if(user.id === action.payload.id)
          return Object.assign({}, user, action.payload);
        else
          return user;
      })
      return {...state, updatedUsers}
    default:
      return state;
  }
}

export default userReducer