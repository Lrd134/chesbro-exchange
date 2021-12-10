import React from 'react';
import { connect } from 'react-redux';
import { login,
        userActions as Actions,
        deleteUser } from '../UserImport';


class UserContainer extends React.Component { 

}
mapDispatchToProps = dispatch => ({ deleteUser: deleteUser(dispatch, login.current)})
export default connect()(UserContainer);