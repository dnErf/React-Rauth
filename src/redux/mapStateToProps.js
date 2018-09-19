
export function testStateToProps (state) {
  return { message : state }
}

export function authStateToProps (state) {
  return { 
    auth : state.auth ,
    error : state.error
  }
}

export function contentStateToProps (state) {
  return {
    // auth : state.auth ,
    content : state.content ,
  }
}