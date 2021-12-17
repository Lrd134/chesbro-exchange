const userActions = {
  newUser: (user) => ({ type: "NEW_USER", 
    payload: {
      user: user
    }
  }),
  addUsers: users => ({
    type: "ADD_USERS",
    users
  }),
  removeUser: id => ({type: "REMOVE_USER", payload: id}),
  
  updateUser: (user) => {
    return {type: "UPDATE_USER", payload: {
      user: user
    }}
  },
  loginUser: (user) => {
    return { type: "LOGIN_USER", payload: {
      user: user
    }}
  },
  initUsers: {type: "START_ADDING_USERS_REQUEST"},
  newUserRequest: {type: "START_CREATING_USER"},
  updateUserRequest: {type: "START_UPDATING_USER"},
  deleteUserRequest: {type: "START_DELETING_USER"},
}
export default userActions