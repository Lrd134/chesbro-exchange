const userActions = {
  addUser: ({name, email}) => {
    return {type: "ADD_USER", payload: {
      name,
      email
    }}
  },
  removeUser: id => ({type: "REMOVE_USER", payload: id}),
  
  updateUser: (id, name, email) => {
    return {type: "UPDATE_USER", payload: {
      id,
      name,
      email
    }}
  },
  initUsers: {type: "START_ADDING_USERS_REQUEST"},
  newUserRequest: {type: "START_CREATING_USER"},
  updateUserRequest: {type: "START_UPDATING_USER"},
  deleteUserRequest: {type: "START_DELETING_USER"}
}
export default userActions