import indexUrl from '../../helpers/indexUrl'
import tokenActions from './tokenActions';
const getTokens = dispatch => {
  dispatch(tokenActions.initTokens)
  fetch(indexUrl + 'tokens').then(resp => resp.json()).then(tokens =>
    dispatch(tokenActions.addTokens(tokens))).catch(error => console.log(error));
};
const newToken = (dispatch, token = {
  name: "",
  email: ""
}) => {
  const newTokenObj = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": '*'
    },
    method: "POST",
    body: JSON.stringify({
            token: {
                    name: token.name,
                    email: token.email
            }
          })
  }
  dispatch(tokenActions.newTokenRequest)
  fetch(indexUrl + 'tokens', newTokenObj).then(resp => resp.json()).then(token =>
    dispatch(tokenActions.newToken(token))).catch(error => console.log(error));
}
const updateToken = (dispatch, token) => {
  const updateTokenObj = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": '*'
    },
    method: "PATCH",
    body: 
      JSON.stringify({
        token: {
          name: token.name,
          email: token.email
        }
      })}
  dispatch(tokenActions.updateTokenRequest)
  fetch(indexUrl + 'tokens/' + token.id, updateTokenObj).then(resp => resp.json()).then(token => {
    dispatch(tokenActions.updateToken(token))
  }).catch(error => console.log(error));
}

export { getTokens, newToken, updateToken }
