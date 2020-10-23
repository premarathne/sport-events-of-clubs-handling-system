const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
console.log(req.body.username)
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
console.log(userData)
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              
              res.status(200).json({ status: user.email + ' Registered!' })
            },console.log("ok"))
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })

})

router.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log(user)
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)

        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').post((req, res) => {
  console.log(req.params.id)
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('user deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
