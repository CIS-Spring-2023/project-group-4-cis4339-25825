const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { service } = require('../models/models')


// POST new service
router.post('/', (req, res, next) => {
    const newService = req.body
    newService.org = org
    service.create(newService, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })


// POST new client
router.post('/', (req, res, next) => {
    const newClient = req.body
    newClient.orgs = [org]
    clients.create(newClient, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// GET all services for org
router.get('/', (req, res, next) => {
    service
      .find({ orgs: org }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
  })


// GET services that are set to active
router.get('/active', (req, res, next) => {
    service.find({ status: "active" }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})


// PUT update status to active for selected services in a list
router.put('/activate', (req, res, next) => {
    const serviceIds = req.body.id;

    service.updateMany({ _id: { $in: serviceIds } }, { $set: { status: 'active' } }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
});

module.exports = router
