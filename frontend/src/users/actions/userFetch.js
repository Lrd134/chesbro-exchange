import indexUrl from '../../helpers/indexUrl'
import userActions from './userActions';
import loginActions from '../../login/actions/loginActions';
const users = "users/";
const getUsers = dispatch => {
  dispatch(userActions.initUsers)
  fetch(indexUrl + 'users').then(resp => resp.json()).then(users =>
    dispatch(userActions.addUsers(users))).catch(error => console.log(error));
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
  dispatch(userActions.newUserRequest)
  fetch(indexUrl + 'users', newUserObj).then(resp => resp.json()).then(user =>{
    if (user.message)
      alert(user.message);
    else {
      dispatch(userActions.newUser(user));
      dispatch(loginActions.loginUser(user));
    }
  }).catch(error => console.log(error));
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
  dispatch(userActions.updateUserRequest)
  fetch(indexUrl + users + user.id, updateUserObj).then(resp => resp.json()).then(user => {
    if (user.message)
      alert(user.message);
    else
      dispatch(userActions.updateUser(user))
  }).catch(error => console.log(error));
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
  dispatch(userActions.deleteUserRequest);
  const url = indexUrl + users + user.id.toString();
  fetch(url, deleteUserObj).then(resp => resp.json()).then(json => {
    alert(json.message);
    dispatch(userActions.removeUser(user.id));
    dispatch(loginActions.logoutUserRequest)
    dispatch(loginActions.logoutUser());
  }).catch(error => {
    console.log(error);
  });
}
export { getUsers, newUser, updateUser, deleteUser }
