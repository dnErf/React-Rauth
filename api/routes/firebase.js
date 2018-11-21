const
  validateInput = require('../validation')
  , firebase = require('firebase')
  
  firebase
    .initializeApp({
      apiKey: "AIzaSyD5RCN7wKBOJyuhEleFpRTYKGnxt2PiCq8",
      authDomain: "react-rauth.firebaseapp.com",
      databaseURL: "https://react-rauth.firebaseio.com",
      projectId: "react-rauth",
      storageBucket: "react-rauth.appspot.com",
      messagingSenderId: "760531244954"
    })
    .firestore()
    .settings({ 
      timestampsInSnapshots: true 
    })

// firebase.collection(collection) . get . then . etc

// post api/signin
exports.signIn = async function(req,res) {

  const 
    { errors , isValid } = validateInput(req.body)
  if 
    (!isValid) { return res.status(400).json(errors) }

  const { email , password } = req.body
  
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((credential) => {
        res.json({success:true,token:'Bearer '+credential.user.refreshToken})
    })
    .catch((err) => { res.json(err) })

}

exports.signUp = async function(req,res) {

  const 
    { errors , isValid } = validateInput(req.body)
  if 
    (!isValid) { return res.status(400).json(errors) }

  const { email , password } = req.body
//  
  firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((user) => { res.json(user) })
    .catch((err) => { res.json(err) })

}