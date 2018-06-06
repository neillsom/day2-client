import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loginUser } from '../actions'

class Login extends Component {

  handleSubmit(event) {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    this.props.dispatch(loginUser(username, password))
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <button>Login</button>
      </form>
    )
  }
}

export default connect()(Login)
