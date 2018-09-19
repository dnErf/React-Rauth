import axios from 'axios'
import {
  AUTH_USER ,
  GET_ERRORS ,
  CLEAR_ERRORS
} from '../types'

const authActions = {
  signIn : (formData,callback) => async dispatch => {
    try {
      await axios
        .post('http://localhost:5000/api/signin',formData)
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
    try {
      await axios
        .post('http://localhost:5000/api/signup',formData)
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

// export const signIn = (formData,callback) => async dispatch => {
//   try {
//     await axios
//       .post('http://localhost:5000/signin',formData)
//       .then(response => {
//         dispatch({ type : AUTH_USER , payload : response.data.token })
//         callback()
//       })
//       .catch(err => dispatch({ type : SET_ERROR , payload : err.response.data })) 
//   }
//   catch (err) {
//     dispatch({ type : SET_ERROR , payload : err})
//   }
// }