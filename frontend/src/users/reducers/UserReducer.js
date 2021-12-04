import uuid from 'uuid';
const UserReducer = (state = {
  users: [],
  requesting: false,
}, action = {
  type: "SEND_USER_DATA_REQUEST",
}) => {
  switch(action.type){
    case("SEND_USER_DATA_REQUEST"):
      return {...state, requesting: true}
    case("ADD_USER"):
      const {name, email} = state.action.payload;
      const user = {
        name,
        email,
        id: uuid()
      }
      return {...state, users: state.users.concat(user)}
    case("REMOVE_USER"):
      const users = state.users.filter(user => user.id !== action.payload)
      return {...state, users}
    case("UPDATE_USER"):
      const users = state.users.map(user => {
        if(user.id === action.payload.id)
          return Object.assign({}, user, action.payload);
        else
          return user;
      })
      return {...state, users}
    default:
      return state;
  }
}

export default UserReducer