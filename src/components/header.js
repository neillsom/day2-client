import React from 'react'
import './header.css';

export class Header extends React.Component {
  render() {
    return(
      <nav className='Header navbar'>
        <div className='container'>
          <div className='navbar-header'>
            <ul className='nav'>
              <li><a href='#'>Login</a></li>
              <li><a href='#'>Sign up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
