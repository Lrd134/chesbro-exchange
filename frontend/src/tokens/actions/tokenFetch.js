import indexUrl from '../../helpers/indexUrl'
import { tokenActions as Actions } from '../TokenImport';
const getTokens = dispatch => {
  dispatch(Actions.initTokens)
  fetch(indexUrl + 'tokens').then(resp => resp.json()).then(tokens =>
    dispatch(Actions.addTokens(tokens))).catch(error => console.log(error));
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
  dispatch(Actions.newTokenRequest)
  fetch(indexUrl + 'tokens', newTokenObj).then(resp => resp.json()).then(token =>
    dispatch(Actions.newToken(token))).catch(error => console.log(error));
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
  dispatch(Actions.updateTokenRequest)
  fetch(indexUrl + 'tokens/' + token.id, updateTokenObj).then(resp => resp.json()).then(token => {
    dispatch(Actions.updateToken(token))
  }).catch(error => console.log(error));
}

export { getTokens, newToken, updateToken }
