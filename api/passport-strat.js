
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const secretKey = require('../config.js').secrets
const userAuth = require('./model').Auth

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