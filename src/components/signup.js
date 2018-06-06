import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'

export class Signup extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    this.props.dispatch(registerUser(username, password))

  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="username"/>
          <input type="password" name="password"/>
          <button>Signup</button>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);
