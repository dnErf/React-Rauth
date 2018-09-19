const bcrypt = require('bcryptjs')
const Schema = require('mongoose').Schema

const authSchema = new Schema({
  email : { type : String , lowercase : true , required : true , unique : true } ,
  password : { type : String , required : true } ,
  createdOn : { type : String , default : Date.now }
})

// don't use arrown function
authSchema
  .pre('save', function(next) {
    const user = this
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(user.password,salt,(err,hash)=>{
        user.password = hash
        next()
      })
    })
  })

  .methods.matchPassword = function(inputPass) {
    return bcrypt.compare(inputPass,this.password)
  }

module.exports = authSchema