const router = require('express').Router()
const auth = require('./routes/auth')
const content = require('./routes/content')
const passport = require('passport')
require('./passport-strat')

const requireAuth = passport.authenticate('jwt',{session:false})

module.exports = router
  .post('/signin', auth.signIn)
  .post('/signup', auth.signUp) 
  .get('/dashboard', requireAuth, content)