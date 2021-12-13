const tokenReducer = (state = {
  tokens: [],
  requesting: false,
}, action) => {
  switch(action.type){
    case("SEND_TOKEN_DATA_REQUEST" || "START_UPDATING_TOKEN" || "START_CREATING_TOKEN" || "START_DELETING_TOKEN"):
      return {...state, requesting: true}
    case("ADD_TOKENS"):
    {
      return {...state, tokens: state.tokens.concat(action.tokens)}
    }
    case("NEW_TOKEN"): {
      const {name, email, id} = action.payload;
      const token = {
        name,
        email,
        id
      }
      window.sessionStorage.setItem("logged_in", JSON.stringify({token}))
      
      return {...state, tokens: state.tokens.concat(token)}
    }
    case("REMOVE_TOKEN"):
      const remainingTokens = state.tokens.filter(token => token.id !== action.payload)
      return {...state, remainingTokens}
    case("UPDATE_TOKEN"):
      let updatedTokens = state.tokens.map(token => {

        if(token.id === action.payload.id)
          return Object.assign({}, action.payload);
        else
          return token;
      })
      return {...state, updatedTokens}
    default:
      return state;
  }
}

export default tokenReducer