import indexUrl from '../../helpers/indexUrl'
import { userActions as Actions } from '../UserImport';
const getUsers = dispatch => {
  dispatch(Actions.initUsers)
  fetch(indexUrl + 'users').then(resp => resp.json()).then(users =>
    dispatch(Actions.addUsers(users))).catch(error => console.log(error));
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
  fetch(indexUrl + 'users', newUserObj).then(resp => resp.json()).then(user =>
    dispatch(Actions.newUser(user))).catch(error => console.log(error));
}
const updateUser = (dispatch, user) => {
  const updateUserObj = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": '*'
    },
    method: "PATCH",
    body: 
      JSON.stringify({
        user: {
          name: user.name,
          email: user.email
        }
      })}
  dispatch(Actions.updateUserRequest)
  fetch(indexUrl + 'users/' + user.id, updateUserObj).then(resp => resp.json()).then(user => {
    dispatch(Actions.updateUser(user))
  }).catch(error => console.log(error));
}
const loginUser = (dispatch, user) => {
  dispatch(Actions.loginUserRequest)
  fetch(indexUrl + 'users/' + user).then(resp => resp.json()).then(user => {
    debugger;
    debugger;
    debugger;
  })
}

export { getUsers, newUser, updateUser, loginUser }
