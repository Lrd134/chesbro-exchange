const userActions = {
  newUser: ({name, email, id}) => ({ type: "NEW_USER", 
    payload: {
      name,
      email,
      id
    }
  }),
  addUsers: users => ({
    type: "ADD_USERS",
    users
  }),
  removeUser: id => ({type: "REMOVE_USER", payload: id}),
  
  updateUser: ({id, name, email}) => {
    return {type: "UPDATE_USER", payload: {
      id,
      name,
      email
    }}
  },
  loginUser: ({id, name, email}) => {
    return { type: "LOGIN_USER", payload: {
      id,
      name,
      email
    }}
  },
  initUsers: {type: "START_ADDING_USERS_REQUEST"},
  newUserRequest: {type: "START_CREATING_USER"},
  updateUserRequest: {type: "START_UPDATING_USER"},
  deleteUserRequest: {type: "START_DELETING_USER"},
  loginUserRequest: {type: "START_LOGIN_PROCESS"}
}
export default userActions