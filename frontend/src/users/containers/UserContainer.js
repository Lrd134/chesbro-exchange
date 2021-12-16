import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import UserForm from '../components/UserForm';
import { deleteUser, updateUser } from '../actions/userFetch';

class UserContainer extends React.Component { 
  state= {
    name: "",
    email: "",
    editing: false

  }
  handleDelete = event => {
    this.props.deleteUser(this.props.current_user);
  }
  openEditForm = () => {
    this.setState({...this.state, editing: true })
  }
  render() {
    const user = this.props.current_user.user;
    if (user)
     return (
      <div className="profile">
        <ul>
          <User key={user.attributes.id} user={user.attributes} />
          {this.state.editing ? <UserForm /> : null}
        </ul>
        <button onClick={this.handleDelete} >Delete {user.attributes.name}</button>
        <button onClick={this.openEditForm} >Edit {user.attributes.name}</button>
      </div>
    )
    else
     return (<h1>Please login.</h1>)
  }
}
const mapDispatchToProps = dispatch => ({ deleteUser: user => deleteUser(dispatch, user),
                                          updateUser: () => updateUser(dispatch) })

const mapStateToProps = ({current_user}) => ({
  current_user: current_user.current_user
})                                        
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);