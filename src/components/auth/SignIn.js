import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SignIn extends Component {
  render() {
    return (
      <div className="card mh3 ph3 w-90">
        <form onSubmit={this.props.handleSubmit} noValidate>
          <p>
            Email 
            <input 
              className={classNames('card w-90',{'b-error':this.props.error.email})} 
              name="email"
              onChange={this.props.handleChange}
              placeholder="mail@mail.com" 
              type="email"
              value={this.props.email}
            />
          </p>
          <p>
            Password 
            <input 
              className={classNames('card w-90',{'b-error':this.props.error.password})} 
              name="password"
              onChange={this.props.handleChange}
              placeholder="password"
              type="password"
              value={this.props.password}
            />
          </p>
          <p className="pv3 mha">
            {this.props.register ?
              <button className="btn" type="submit">Sign Up</button> :
              <button className="btn primary" type="submit">Sign In</button>
            }
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