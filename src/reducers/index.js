import { combineReducers } from 'redux'
import priceFilter from './priceFilter'
import searchBar from './searchBar'

export default combineReducers({
  priceFilter,
  searchBar
})
