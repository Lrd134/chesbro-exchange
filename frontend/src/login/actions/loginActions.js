

  const loginActions = {
    loginUser: (user) => {
      return { type: "LOGIN_USER", payload: {
        user
      }}
    },
    logoutUser: ({id}) => {
      return {
        type: "LOGOUT_USER",
        payload:{
          id
        }
      }
    },
    loginUserRequest: {type: "START_LOGIN_PROCESS"},
    logoutUserRequest: { type: "START_LOGOUT_PROCESS"}
  }
  export default loginActions