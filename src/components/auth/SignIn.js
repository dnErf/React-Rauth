import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classFuncStyle from 'class-func-style'

class SignIn extends Component {
  render() {
    let 
      { error , handleChange , handleSubmit , registerSuccess } = this.props 
      , funcStyle = classFuncStyle({
        'inputBox' : 'bx-input w-90' ,
        'inputError' : 'bx-input--onerror' ,
        'inputErrorTxt' : 'f7 font--red fr pt1 i' ,
      })
    return (
      <div className="card mh3 ph3 w-90">
        <form onSubmit={handleSubmit} noValidate>
          <p>
            Email
            <input 
              {...funcStyle('inputBox',{'inputError':error.email})}
              name="email"
              onChange={handleChange}
              placeholder="mail@mail.com" 
              type="email"
              value={this.props.email}
            />
            {error.email ? <span {...funcStyle('inputErrorTxt')}>*Email is Required</span>:''}
          </p>
          <br />
          <p>
            Password 
            <input
              {...funcStyle('inputBox',{'inputError':error.password})}
              name="password"
              onChange={handleChange}
              placeholder="password"
              type="password"
              value={this.props.password}
            />
            {error.password ? <span {...funcStyle('inputErrorTxt')}>* Password is Required</span>:''}
          </p>
          <p className="mv3 pt3">
            {this.props.register ?
              <button className="btn box" type="submit">Sign Up</button> :
              <button className="btn primary" type="submit">Sign In</button>
            }
            {registerSuccess ? <span className="f7 font--green fr pt1 i">* Register Success</span>:''}
          </p>
          
        </form>
      </div>
    )
  }
}

SignIn.propTypes = {
  error : PropTypes.object ,
  handleChange : PropTypes.func.isRequired ,
  handleSubmit : PropTypes.func.isRequired ,
  signIn : PropTypes.func.isRequired ,
  registerSuccess : PropTypes.bool ,
}

export default SignIn