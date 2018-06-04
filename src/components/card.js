import React from 'react'
import {connect} from 'react-redux'
import './card.css'

class Card extends React.Component {
  render() {
    return <div className='Card'>
      Card
    </div>
  }
}

export default connect()(Card);
