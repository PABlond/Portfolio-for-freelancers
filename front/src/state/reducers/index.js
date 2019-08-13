import nav from './navReducer'
import content from './contentReducers'
import { combineReducers } from 'redux'

export default combineReducers({ nav, content });