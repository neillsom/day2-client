import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchStylesFromApi } from './actions'
import Card from './components/card';
import { Header } from './components/header'


class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={() => this.props.dispatch(fetchStylesFromApi())}>Get styles from server</button>
        <Header />

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default connect()(App);
