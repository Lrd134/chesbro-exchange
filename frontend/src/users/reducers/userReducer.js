import { login, redirect } from "../UserImport";

const userReducer = (state = {
  users: [],
  requesting: false,
}, action) => {
  switch(action.type){
    case("SEND_USER_DATA_REQUEST" || "START_UPDATING_USER" || "START_CREATING_USER" || "START_DELETING_USER" || "START_LOGIN_PROCESS"):
      return {...state, requesting: true}
    case("ADD_USERS"):
    {
      return {...state, users: state.users.concat(action.users)}
    }
    case("NEW_USER"): {
      const {name, email, id} = action.payload;
      const user = {
        name,
        email,
        id
      }
      login.in({user: user})
      redirect();
      return {...state, users: state.users.concat(user)}
    }
    case("REMOVE_USER"):
      const remainingUsers = state.users.filter(user => user.id !== action.payload)
      return {...state, remainingUsers}
    case("UPDATE_USER"):
      let updatedUsers = state.users.map(user => {

        if(user.id === action.payload.id)
          return Object.assign({}, action.payload);
        else
          return user;
      })
      return {...state, updatedUsers}  
    case("LOGIN_USER"):
      login.in({user: action.payload})
      redirect();
      return {...state};
    default:
      return state;
  }
}

export default userReducer