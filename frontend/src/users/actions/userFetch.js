import indexUrl from '../../helpers/indexUrl'
import userActions from './userActions';
import loginActions from '../../login/actions/loginActions';
const users = "users/";
const getUsers = () => {
  return (dispatch) => {
    dispatch(userActions.initUsers)
    fetch(indexUrl + 'users').then(resp => resp.json()).then(users => {
      dispatch(userActions.addUsers(users.data))
    }).catch(error => console.log(error));
  }
};

const newUser = (user = {
  name: "",
  email: ""
}) => {
  return dispatch => {
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
        dispatch(userActions.newUser(user.data));
        dispatch(loginActions.loginUser(user.data));
      }
    }).catch(error => console.log(error));
  }
}

const updateUser = (user, id) => {
  return dispatch => {
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
    
    fetch(indexUrl + users + id, updateUserObj).then(resp => resp.json()).then(user => {
      if (user.message)
        alert(user.message);
      else {
        dispatch(userActions.updateUser(user.data))
        alert("Please logout and back in to see changes.")
      }
    }).catch(error => console.log(error));
  }
}

const deleteUser = ({user}) => {
  return dispatch => {
    const deleteUserObj = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": '*'
      },
      method: "DELETE"
      }
    dispatch(userActions.deleteUserRequest);
    dispatch(loginActions.logoutUserRequest)
    dispatch(loginActions.logoutUser);
    dispatch(userActions.removeUser(user.id));
    const url = indexUrl + users + user.id.toString();
    fetch(url, deleteUserObj).then(resp => resp.json()).then(json => {
      alert(json.message);
    }).catch(error => {
      console.log(error);
    });
  }
}
export { getUsers, newUser, updateUser, deleteUser }
