const mongoose = require('mongoose')
const authSchema = require('./schema/auth')

exports.Auth = mongoose.model('user',authSchema)