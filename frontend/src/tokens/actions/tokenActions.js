const tokenActions = {
  newToken: ({token, id}) => ({ type: "NEW_TOKEN", 
    payload: {
      //Not Finished yet
    }
  }),
  addTokens: tokens => ({
    type: "ADD_TOKENS",
    tokens
  }),
  removeToken: id => ({type: "REMOVE_TOKEN", payload: id}),
  updateToken: ({token, id}) => {
    return {type: "UPDATE_TOKEN", payload: {
      id,
      token
    }}
  },
  initTokens: {type: "START_ADDING_TOKENS_REQUEST"},
  newTokenRequest: {type: "START_CREATING_TOKEN"},
  updateTokenRequest: {type: "START_UPDATING_TOKEN"},
  deleteTokenRequest: {type: "START_DELETING_TOKEN"}
}
export default tokenActions