import { combineReducers } from 'redux'
import user from './user'
import styleReducer from './styleReducer'

const rootReducer = combineReducers({
  user, 
  styleReducer
})

export default rootReducer
