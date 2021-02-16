import { combineReducers } from 'redux'
import countriesReducer from './reducer'

const rootReducer = combineReducers({
  countries: countriesReducer
})

export default rootReducer