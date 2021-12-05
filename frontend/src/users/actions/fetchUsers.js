import indexUrl from '../../indexUrl'
import { userActions } from '../UserImport';
const fetchUsers = () => dispatch => {
  dispatch(userActions.initUsers)
  fetch(indexUrl + 'users').then(resp => resp.json()).then(users =>
    dispatch({type: "ADD_USERS", users})).catch(error => console.log(error));
};
export default fetchUsers
