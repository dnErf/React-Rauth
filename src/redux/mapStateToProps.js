export function authStateToProps (state) {
  return { 
    auth : state.auth ,
    error : state.error
  }
}

export function contentStateToProps (state) {
  return {
    content : state.content ,
  }
}