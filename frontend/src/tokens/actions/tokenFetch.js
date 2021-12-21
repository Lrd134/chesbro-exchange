import indexUrl from '../../helpers/indexUrl'
import tokenActions from './tokenActions';
const getTokens = () => {
  return dispatch => {
    dispatch(tokenActions.initTokens)
    fetch(indexUrl + 'tokens').then(resp => resp.json()).then(tokens =>
      dispatch(tokenActions.addTokens(tokens.data))).catch(error => console.log(error));
  }
}

export { getTokens }
