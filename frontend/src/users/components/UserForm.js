import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserForm extends Component {
  state = {
    name: "",
    email: "",
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="name-input"/>
          <input type="text" className="email-input"/>
          <input type="submit" className="user-submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {

}
export default connect(null, mapDispatchToProps)(UserForm)