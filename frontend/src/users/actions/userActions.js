actions = {
  addUser: (name, email) => {
    return {type: "ADD_USER", name: name, email: email}
  },
  removeUser: id => {
    return {type: "REMOVE_USER", payload: id}
  },
  updateUser: (id, name, email) => {
    return {type: "UPDATE_USER", payload: {
      id,
      name,
      email
    }}
  }
}
export default actions