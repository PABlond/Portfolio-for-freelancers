import nav from "./navReducer"
import content from "./contentReducers"
import user from './userReducer'
import { combineReducers } from "redux"

export default combineReducers({ nav, content, user })
