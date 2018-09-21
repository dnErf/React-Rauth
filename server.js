const 
  express = require('express')
  bodyParser = require('body-parser')
  mongoose = require('mongoose')
  mongoURL = require('./config.js').db
  passport = require('passport')
  path = require('path')
  routes = require('./api/routes')

const
  app = express()
  PORT = process.env.PORT || 5000

mongoose
  .set('useCreateIndex',true)
  .connect(mongoURL,{ useNewUrlParser : true })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err))

app
  .use(bodyParser.urlencoded({extended:false}))
  .use(bodyParser.json())
  .use(require('cors')())
  .use('/api', routes)
  .use(express.static('build'))

app.listen(PORT,() => console.log(`server running on port ${PORT}`))