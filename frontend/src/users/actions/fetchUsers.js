import indexUrl from '~/indexUrl'
const fetchUsers = () => dispatch => {
  dispatch({type: "START_ADDING_USERS_REQUEST"})
  fetch(indexUrl + 'users').then(resp => resp.json()).then(users =>
    dispatch({type: "ADD_USERS", users}))
};
export default fetchUsers
