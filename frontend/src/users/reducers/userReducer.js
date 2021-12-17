const UserReducer = (state = {
  users: [],
  requesting: false,
}, action) => {
  switch(action.type) {
    case("SEND_USER_DATA_REQUEST" || "START_UPDATING_USER" || "START_CREATING_USER" || "START_DELETING_USER" || "START_LOGIN_PROCESS"):
      return {...state, requesting: true}
    case("ADD_USERS"): {
      return {...state, users: state.users.concat(action.users)}
    }
    case("NEW_USER"): {
      return {...state, users: state.users.concat(action.payload.user)}
    }
    case("REMOVE_USER"):
      const remainingUsers = state.users.filter(user => user.id !== action.payload.user.id)
      return {...state, users: remainingUsers}
    case("UPDATE_USER"): {
      let updatedUsers = state.users.map(user => {

        if(parseInt(user.id, 10) === parseInt(action.payload.user.id, 10))
          return Object.assign({}, action.payload.user);
        else
          return user;
      })
      return {...state, users: updatedUsers}
    }
    default:
      return state;
  }
}

export default UserReducer