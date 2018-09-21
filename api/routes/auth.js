const jwt = require('jsonwebtoken')
const secretKey = require('../../config.js').secrets
const userAuth = require('../model').Auth
const validateInput = require('../validation')

// post api/signin
exports.signIn = async function(req,res,next) {
  const { errors , isValid } = validateInput(req.body)
  const email = req.body.email
  const password = req.body.password
  if (!isValid) { return res.status(400).json(errors) }
  userAuth
    .findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'user not found'
        return res.status(404).json(errors)
      }
      else {
        user
          .matchPassword(password)
          .then(isMatch=>{
            if (!isMatch) {
              errors.password = 'incorrect password'
              return res.status(400).json(errors)
            }
            else {
              const payload = { id : user.id }
              jwt.sign(
                payload,
                secretKey,
                {expiresIn:3600} ,
                (err,token)=>{res.json({success:true,token:'Bearer '+token})}
              )
            }
          })
      }
    })
    .catch(err => res.json({err}))
}

// put api/signup
exports.signUp = async function(req,res,next) {
  const { errors , isValid } = validateInput(req.body)
  const newUserAuth = new userAuth({
    email : req.body.email , 
    password : req.body.password
  })
  if (!isValid) { return res.status(400).json(errors) }
  userAuth
    .findOne({ email : req.body.email })
    .then(user => { 
      if (user) {
        errors.email = 'email already exist'
        return res.status(400).json({ errors })
      }
      else {
        newUserAuth
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
      }
    })
    .catch(err => { res.json(err) })
}