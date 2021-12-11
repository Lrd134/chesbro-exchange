

  const loginActions = {
    loginUser: (user) => {
      return { type: "LOGIN_USER", payload: {
        user
      }}
    },
    logoutUser: { type: "LOGOUT_USER" },
    loginUserRequest: {type: "START_LOGIN_PROCESS"},
    logoutUserRequest: { type: "START_LOGOUT_PROCESS"}
  }
  export default loginActions