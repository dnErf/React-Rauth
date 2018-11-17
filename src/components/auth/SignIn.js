import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SignIn extends Component {
  render() {
    let { error , registerSuccess } = this.props
    return (
      <div className="card mh3 ph3 w-90">
        <form onSubmit={this.props.handleSubmit} noValidate>
          <p>
            Email
            <input 
              className={classNames('card w-90',{'b-error':error.email})} 
              name="email"
              onChange={this.props.handleChange}
              placeholder="mail@mail.com" 
              type="email"
              value={this.props.email}
            />
            {error.email ? <span className="f7 font--red fr pt1 i">*Email is Required</span>:''}
          </p>
          <br />
          <p>
            Password 
            <input 
              className={classNames('card w-90',{'b-error':error.password})} 
              name="password"
              onChange={this.props.handleChange}
              placeholder="password"
              type="password"
              value={this.props.password}
            />
            {error.password ? <span className="f7 font--red fr pt1 i">*Password is Required</span>:''}
          </p>
          <p className="mv3 pt3">
            {this.props.register ?
              <button className="btn" type="submit">Sign Up</button> :
              <button className="btn primary" type="submit">Sign In</button>
            }
            {registerSuccess ? <span className="f7 font--green fr pt1 i">*Register Success</span>:''}
          </p>
          
        </form>
      </div>
    )
  }
}

SignIn.propTypes = {
  handleChange : PropTypes.func.isRequired ,
  handleSubmit : PropTypes.func.isRequired ,
  signIn : PropTypes.func.isRequired
}

export default SignIn