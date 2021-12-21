import indexUrl from "../../helpers/indexUrl";
import loginActions from "./loginActions";
const loginUser = userName => { 
  return dispatch => {
    dispatch(loginActions.loginUserRequest)
    fetch(indexUrl + 'users/' + userName).then(resp => resp.json()).then(json => {
      const user = json.data
      if (json.message)
        alert(json.message);
      else
        dispatch(loginActions.loginUser(user))
    })
  }
}

export default loginUser;