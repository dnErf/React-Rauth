import axios from 'axios'
import {
  AUTH_USER ,
  GET_ERRORS ,
  CLEAR_ERRORS
} from '../types'

const authActions = {
  signIn : (formData,callback) => async dispatch => {
    // 'http://localhost:5000/api/signin'
    try {
      await axios
        .post('/api/signin',formData)
        .then(response => {
          dispatch({ type : AUTH_USER , payload : response.data.token })
          callback()
        })
        .catch(err => dispatch({ type : GET_ERRORS , payload : err.response.data })) 
    }
    catch (err) {
      dispatch({ type : GET_ERRORS , payload : err})
    }
  } ,
  signUp : (formData,callback) => async dispatch => {
    // http://localhost:5000/api/signup
    try {
      await axios
        .post('/api/signup',formData)
        .then(response => {
          dispatch({ type : AUTH_USER , payload : response.data.token })
          callback()
        })
        .catch(err => dispatch({ type : GET_ERRORS , payload : err.response.data })) 
    }
    catch (err) {
      dispatch({ type : GET_ERRORS , payload : err})
    }
  } ,
  clearErrors : () => {
    return {
      type : CLEAR_ERRORS
    }
  }
}

export default authActions