const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { login } = require('../models/models')


// GET login for org
router.get('/', (req, res, next) => {
    login
      .find({ orgs: org }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
  })


module.exports = router