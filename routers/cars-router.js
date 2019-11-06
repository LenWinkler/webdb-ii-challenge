const knex = require('../data/dbConfig');

const router = require('express').Router();

router.get('/', (req, res) => {
    knex('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log('get cars error', err);
            res.status(500).json({ error: "Unable to get cars from database" })
        })
})

router.post('/', (req, res) => {
    knex
      .insert(req.body, 'id')
      .into('cars')
      .then(ids => {
          res.status(201).json(ids)
      })
      .catch(err => {
          console.log('error adding car', err);
          res.status(500).json({ error: "Unable to add car to the database" })
      })
})

module.exports = router;