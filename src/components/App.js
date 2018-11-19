import React, { Component } from 'react'
import {authConnect} from './redux'
import SignIn from './auth/SignIn'

class App extends Component {
  constructor () {
    super()
    this.state = {
      email : '' ,
      password : '' ,
      register : false , 
      registerSuccess : false
    }
  }
  handleChange = e => { this.setState({ [e.target.name] : e.target.value }) }
  handleSignUp = e => { 
    this.setState({ register : !this.state.register , registerSuccess : false })
    this.props.clearErrors() 
  }
  handleSubmit = e => {
    e.preventDefault()
    const authData = {
      email : this.state.email ,
      password : this.state.password
    }
    if (!this.state.register) {
      this.props.signIn(authData,()=>{
        this.props.history.push('/content')
      })
    }
    else {
      this.props.signUp(authData,()=>{
        this.setState({
          email : '' ,
          password : '' , 
          register : !this.state.register ,
          registerSuccess : !this.state.registerSuccess 
        })
      })
    }
    
  }
  render() {
    let 
      { email , password , register , registerSuccess } = this.state
      , { error , signIn } = this.props
    return (
      <div className="c">
        <h3 className="">Node JS Access Authentication with React JS</h3>
        <div className="flex content-between">
          <div className="c w-50">
            <span className="f4 u">Authentication</span> is for identifying and giving different access rights and content to the users depending on their assigned role.
            <br />
            <br />
            <p>
            <a onClick={this.handleSignUp}>
              {register ? 
                'Log me in ...' :
                'I want to try and Sign Up'
              }
            </a>
            </p>
            <div className="f6 i">{"You'll see cheats when you sign in."}</div>
            <br />
            <p>Libraries initially used : 
            {' '}<a href="https://github.com/kelektiv/node.bcrypt.js" target="blank">Bcrypt</a>, 
            {' '}<a href="https://jwt.io/" target="blank">JSON Web Token</a>,
            {' '}<a href="http://www.passportjs.org/" target="blank">Passport</a>
            </p>
          </div>
          <div className="w-50">
            <SignIn
              email={email}
              error={error} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              signIn={signIn}
              password={password} 
              register={register}
              registerSuccess={registerSuccess} 
            />
          </div>
        </div>
        <br />
    </div>      
    )
  }
}

const mapStateToProps = state => ({
  auth : state.auth ,
  error : state.error
});

export default authConnect(mapStateToProps)(App)