const redirect = (url = "/") => {
  const history = window.history
  history.pushState({}, '', url);
  history.go(0);
}

export default redirect;