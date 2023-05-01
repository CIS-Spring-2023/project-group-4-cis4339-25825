const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const org = process.env.ORG

// importing data model schemas
const { login } = require('../models/models')

// GET login for org
router.get('/', (req, res, next) => {
  login.find({ orgs: org }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})


// Validate Login Information
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password' })
  }

  try {
    const user = await login.findOne({ username })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Following should be used for storing hashed password
    // const isMatch = await bcrypt.compare(password, user.password)
    // Storing passwords as plain text
    const isMatch = password === user.password
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const jwtSecret = process.env.JWT_SECRET || 'secret'
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' })

    res.json({ token, access: user.access })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

module.exports = router
