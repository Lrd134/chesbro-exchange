

const LoginReducer = (state = {
  current_user: {},
  requesting: false,
}, action) => {
  switch(action.type){
    case("START_LOGIN_PROCESS"):
      return {...state, requesting: true} 
    case("LOGIN_USER"):
      return {...state, current_user: action.payload};
    case("LOGOUT_USER"):
      return {...state, current_user: {}};
    default:
      return state;
  }
}

export default LoginReducer