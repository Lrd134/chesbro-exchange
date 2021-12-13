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
    this.props.deleteUser();
  }
  openEditForm = () => {
    this.setState({...this.state, editing: true })
  }
  render() {
    const {user} = this.props.current_user;
    if (user)
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
    else
     return (<h1>Please login.</h1>)
  }
}
const mapDispatchToProps = dispatch => ({ deleteUser: () => deleteUser(dispatch),
                                          updateUser: () => updateUser(dispatch) })

const mapStateToProps = ({current_user}) => ({
  current_user: current_user.current_user
})                                        
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);