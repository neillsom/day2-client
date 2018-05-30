import { combineReducers } from 'redux'
import styleReducer from './styleReducer'

const rootReducer = combineReducers({
  styleReducer
  // combine reducers for future reducers as app grows
})

export default rootReducer
