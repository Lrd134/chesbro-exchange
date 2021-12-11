import indexUrl from '../../helpers/indexUrl'
import { login, userActions as Actions } from '../UserImport';
const users = "users/";
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
  fetch(indexUrl + users + user.id, updateUserObj).then(resp => resp.json()).then(user => {
    dispatch(Actions.updateUser(user))
  }).catch(error => console.log(error));
}
const loginUser = (dispatch, userName) => {
  dispatch(Actions.loginUserRequest)
  fetch(indexUrl + users + userName).then(resp => resp.json()).then(user => {
    dispatch(Actions.loginUser(user))
  })
}
const deleteUser = (dispatch, {user}) => {
  const deleteUserObj = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": '*'
    },
    method: "DELETE"
    }
  dispatch(Actions.deleteUserRequest);
  const url = indexUrl + users + user.id.toString();
  fetch(url, deleteUserObj).then(resp => resp.json()).then(json => {
    alert(json.message);
    dispatch(Actions.removeUser(user.id));
    login.out();
  }).catch(error => {
    console.log(error);
  });
}
export { getUsers, newUser, updateUser, loginUser, deleteUser }
