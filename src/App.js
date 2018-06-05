import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchStylesFromApi } from './actions'
import Card from './components/card';
import { Header } from './components/header'


class App extends Component {
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
