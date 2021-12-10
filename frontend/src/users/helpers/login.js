import { redirect } from '../UserImport';
const storage = window.sessionStorage;
const login = {
  in: user => {
        storage.setItem('loggedIn', JSON.stringify(user))
  },
  out: () => {
        storage.clear();
        redirect();
  },
  current: () => {
    if (storage.getItem('loggedIn'))
      return true
    else
      return false
  }
}

export default login