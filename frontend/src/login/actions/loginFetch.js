import indexUrl from "../../helpers/indexUrl";
import { loginActions } from "../LoginImport";
const loginUser = (dispatch, userName) => {
  dispatch(loginActions.loginUserRequest)
  fetch(indexUrl + 'users/' + userName).then(resp => resp.json()).then(user => {
    if (user.message)
      alert(user.message);
    else
      dispatch(loginActions.loginUser(user))
  })
}

export default loginUser;