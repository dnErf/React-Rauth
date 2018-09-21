import React, { Component } from 'react'

class Content extends Component {
  render () {
    const bcryptCheat = `// Example of generating a salt then hasing the password
bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(user.password,salt,(err,hash)=>{
    user.password = hash
    next()
  })
})`
  const jwtCheat = `// Creating token upon sign in using jsonwebtoken library
jwt.sign(
  payload,
  'yourSecret',
  {expiresIn:3600} ,
  (err,token)=>{res.json({success:true,token:'Bearer '+token})}
)
`
    const passportCheat = `// Using Passport JWT strategy with MongoDB query
const opts = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() ,
  secretOrKey : secretKey
}
passport.use (
  new JwtStrategy(opts, function(payload,done) {
    userAuth
      .findById(payload.id)
      .then(user => {
        if (user) { return done(null,user) }
        else { return done(null,false) }
      })
      .catch(err => console.log(err))
  })
)

`
    return (      
      <div className="c">
        <a href="/">{'<-'} Go Back</a>
        <p className="f3">You Log in using these script/libraries ...</p>
        <div className="ma3 pa3">
          <p className="f4 ma0">Bcrypt</p>
          - a hashing function based on the Blowfish cipher. It incorporate a salt solution to protect against attacks.
          <pre>
          <p>{bcryptCheat}</p>
          </pre>
          <br />
          <p className="f4 ma0">JSON Web Token</p>
          - a JSON-based open standard access token creation for authentication.
          <pre>
          <p>{jwtCheat}</p>
          </pre>
          <br />
          <p className="f4 ma0">Passport</p>
          - a modular Node.JS authentication middleware. Supports JWT , Facebook and more set of strategies.
          <pre>
          {passportCheat}
          </pre>
        </div>
      </div>
    )
  }
}

export default Content