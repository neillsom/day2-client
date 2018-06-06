import React from 'react'
import {connect} from 'react-redux'
// import styleReducer from '../reducers/styleReducer'
import './card.css'

class Card extends React.Component {

  render() {

    return <div className='Card'>
      <img src={this.props.style.imgUrl} height='180px'></img>
      <h3>{this.props.style.title}</h3>
      <label for='addToFavorites'>Add to favorites</label>
      <input type='checkBox' id='addToFavorites' onClick={() => {
        console.log('addToFavorites clicked')

        }
      }/>

      {/*
      <button onClick={() =>
        this.props.dispatch(fetchStylesFromApi())}>
        Get styles from server</button> */}

    </div>
  }
}


const mapStateToProps = state => {

  return {
    styles: state.styleReducer.styles
  }
}

export default connect(mapStateToProps)(Card);
