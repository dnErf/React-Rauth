import React, { Component } from 'react'

class Content extends Component {
  render () {
    return (
      
      <div className="c">
        <a href="/">{'<-'} Go Back</a>
        <p className="f3">You Log in using these script/libraries ...</p>
        <div className="ma3 pa3">
          <p className="f4 ma0">Passport</p>
          - a modular Node.JS authentication middleware. Supports JWT , Facebook and more set of strategies.
          <br /><br />
          <p className="f4 ma0">JSON Web Token</p>
          - a JSON-based open standard access token creation for authentication.
          <br /><br />
          <p className="f4 ma0">bcrypt</p>
          - a hashing function based on the Blowfish cipher. It incorporate a salt solution to protect against attacks.
        </div>
      </div>
    )
  }
}

export default Content