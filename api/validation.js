const Validate = require('validator')

const isEmpty = value => 
    value === undefined || 
    value === null || 
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)

module.exports = function validateInput(data) {

  let errors = {}
  
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  if (Validate.isEmpty(data.email)) {
    errors.email = 'email field is required'
  }
  if (Validate.isEmpty(data.password)) {
    errors.password = 'password field is required'
  }

  return {
    errors ,
    isValid : isEmpty(errors)
  }

}