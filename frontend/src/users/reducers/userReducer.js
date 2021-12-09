const userReducer = (state = {
  users: [],
  requesting: false,
}, action) => {
  switch(action.type){
    case("SEND_USER_DATA_REQUEST" || "START_UPDATING_USER" || "START_CREATING_USER" || "START_DELETING_USER"):
      return {...state, requesting: true}
    case("ADD_USER"):
      const {name, email, id} = action.payload;
      const user = {
        name,
        email,
        id
      }
      const newState = {...state, users: state.users.concat(user)}
      window.history.pushState(newState, "/users", "/users");
      return newState
    case("ADD_USERS"):
    {
      return {...state, users: state.users.concat(action.users)}
    }
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