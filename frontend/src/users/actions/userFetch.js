import indexUrl from '../../indexUrl'
import { userActions as Actions } from '../UserImport';
const getUsers = dispatch => {
  dispatch(Actions.initUsers)
  fetch(indexUrl + 'users').then(resp => resp.json()).then(users =>
    dispatch({type: "ADD_USERS", users})).catch(error => console.log(error));
};
const newUser = (dispatch, user = {
  name: "",
  email: ""
}) => {
  const newUserObj = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": '*'
    },
    method: "POST",
    body: JSON.stringify({
            user: {
                    name: user.name,
                    email: user.email
            }
          })
  }
  dispatch(Actions.newUserRequest)
  fetch(indexUrl + 'users', newUserObj).then(resp => resp.json()).then(users =>
    dispatch({type: "ADD_USERS", users})).catch(error => console.log(error));
}
export { getUsers, newUser }