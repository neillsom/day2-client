import React from 'react'
import './header.css';
import Login from './login'
import Signup from './signup'

export class Header extends React.Component {
  render() {
    return(

      <ul>
        <li id="h2-header">Day2 Hair</li>
        <li><Login /></li>
        <li><Signup /></li>

      </ul>
    )
  }
}
