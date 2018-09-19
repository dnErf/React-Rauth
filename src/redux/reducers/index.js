import { combineReducers } from 'redux'
import auth from './auth'
import content from './content'
import error from './error'

export default combineReducers({
  auth : auth ,
  content : content ,
  error : error ,
})