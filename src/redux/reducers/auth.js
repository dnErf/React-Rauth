import { AUTH_USER } from '../types'

const initialState = {
  isAuthenticated : false ,
  token : ''
}

export default function(state=initialState,action) {
  switch (action.type) {
    case AUTH_USER : return {
      ...state ,
      isAuthenticated : action.payload ? true : false ,
      token : action.payload
    }
    default : return state
  }
}