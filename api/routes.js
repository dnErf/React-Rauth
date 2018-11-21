const 
  router = require('express').Router()
  passport = require('passport')
  auth = require('./routes/auth')
  content = require('./routes/content')
  firebase = require('./routes/firebase')

require('./passport-strat')

const requireAuth = passport.authenticate('jwt',{session:false})

module.exports = router
  .post('/signin', auth.signIn)
  .post('/signup', auth.signUp)
  .post('/firebase/signin', firebase.signIn) 
  .post('/firebase/signup', firebase.signUp) 
  .get('/content', requireAuth, content)