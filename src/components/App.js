import React, { Component } from 'react'

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
    const { email , password , register , registerSuccess } = this.state
    const { error , signIn } = this.props
    return (
      <div className="c">
        <h3 className="">Node JS Access Authentication with ReactJS</h3>
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
            <div className="f6 i">You'll see cheats when you sign in.</div>
            </p>
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
              register={this.state.register} 
            />
          </div>
        </div>
        <br />
        <div className="">
          {error.email ? <span className="bg-error ma1 ph3 pv1 rounded font--light">{error.email}</span>:''}
          {error.password ? <span className="bg-error ma1 ph3 pv1 rounded font--light">{error.password}</span>:''}
          { registerSuccess && <span className="bg-error ma1 ph3 pv1 rounded font--light">Regitered Successfully...</span> }
        </div>
    </div>      
    )
  }
}

export default App