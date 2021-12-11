import { login, redirect } from "../UserImport";

const LoginReducer = (state = {
  current_user: {},
  requesting: false,
}, action) => {
  switch(action.type){
    case("START_LOGIN_PROCESS"):
      return {...state, requesting: true} 
    case("LOGIN_USER"):
      login.in({user: action.payload})
      redirect();
      return {...state};
    case("LOGOUT_USER"):
      
    default:
      return state;
  }
}

export default LoginReducer