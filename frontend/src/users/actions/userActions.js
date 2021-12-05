const UserActions = {
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
  initUsers: () => ({type: "SEND_USER_DATA_REQUEST"}),
}
export default UserActions