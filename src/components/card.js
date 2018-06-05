import React from 'react'
import {connect} from 'react-redux'
// import styleReducer from '../reducers/styleReducer'
import './card.css'

class Card extends React.Component {

  render() {

    return <div className='Card'>
      <h3>{this.props.style.title}</h3>
      <input type='checkBox' id='addToFavorites' />
      <label for='addToFavorites'>Add to favorites</label>
    </div>
  }
}


const mapStateToProps = state => {

  return {
    styles: state.styleReducer.styles
  }
}

export default connect(mapStateToProps)(Card);
