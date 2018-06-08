import React from 'react'
import {connect} from 'react-redux'
// import styleReducer from '../reducers/styleReducer'
import './card.css'

class Card extends React.Component {

  render() {

    return <div className='Card'>
      <img src={this.props.style.imgUrl} height='180px' alt='alt text here'></img>
      <h4>{this.props.style.title}</h4>
      <label htmlFor='addToFavorites'>Add to favorites</label>
      <input type='checkBox' id='addToFavorites' onClick={() => {
        console.log('addToFavorites clicked')

        }
      }/>

    </div>
  }
}


const mapStateToProps = state => {

  return {
    styles: state.styleReducer.styles
  }
}

export default connect(mapStateToProps)(Card);
