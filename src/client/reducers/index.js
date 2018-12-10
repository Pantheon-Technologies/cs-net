import { combineReducers } from 'redux'
import posts from './posts'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  posts,
  visibilityFilter
})