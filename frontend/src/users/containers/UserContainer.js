import React from 'react';
import { connect } from 'react-redux';
import { login,
        deleteUser,
        updateUser,
        User, 
        UserForm } from '../UserImport';


class UserContainer extends React.Component { 
  state= {
    name: "",
    email: "",
    editing: false

  }
  handleDelete = event => {
    this.props.deleteUser();
  }
  openEditForm = () => {
    this.setState({...this.state, editing: true })
  }
  render() {
    const { user } = login.current;
    return (
      <div className="profile">
        <ul>
          <User key={user.id} user={user} />
          {this.state.editing ? <UserForm /> : null}
        </ul>
        <button onClick={this.handleDelete} >Delete {user.name}</button>
        <button onClick={this.openEditForm} >Edit {user.name}</button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({ deleteUser: () => deleteUser(dispatch, login.current),
                                          updateUser: () => updateUser(dispatch, login.current) })
export default connect(null, mapDispatchToProps)(UserContainer);