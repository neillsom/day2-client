import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchStylesFromApi, loginUserSuccess, getUserDashboard } from './actions'
import Card from './components/card';
import { Header } from './components/header'
import Signup from './components/signup'
import Login from './components/login'


class App extends Component {

  componentDidMount() {
    const authToken = localStorage.getItem('token')
    this.props.dispatch(loginUserSuccess(authToken))
  }

  handleLogout() {
    localStorage.removeItem('token')
    window.location = '/'
    // need to update prop in state, use redirect component from router
  }

  getUserDashboard() {
     this.props.dispatch(getUserDashboard())
  }

  render() {
    console.log(`this.props.styles:`)
    console.log(this.props.styles)

    const styles = this.props.styles.map((style, index) => {
      return (
        <li key={index}>
          <Card style={style} />
        </li>

      )
    })

    return (
      <div className="App">

        <button onClick={() => this.props.dispatch(fetchStylesFromApi())}>Get styles from server</button>
        <Header />
        <Signup />
        <Login />
        <button onClick={() => this.handleLogout()}>Logout </button>
        <button onClick={() => this.getUserDashboard()}>Dashboard </button>
        {styles}
      </div>
    );
  }
}


const mapStateToProps = state => {

  return {
    styles: state.styleReducer.styles
  }
}

export default connect(mapStateToProps)(App);
