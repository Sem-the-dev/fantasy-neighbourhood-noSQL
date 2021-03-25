const express = require('express');
const router = express.Router();

const Person = require('../models/people')

// people index route
router.get('/', async (req, res) => {
    try {
        const people = await Person.all
        res.json(people)
    } catch(err) {
        res.status(500).json({err})
    }
})

// people show route
router.get('/:id', async (req, res) => {
    try{
        const person = await Person.findById(req.params.id)
        res.json(person)
    } catch (err) {
        res.status(404).json({err})
    }
})

//create new person route
router.post('/', async (req, res) => {
    try {
        const newPerson = await Person.create(req.body.name, req.body.age)
        res.json(newPerson)
    } catch(err) {
        res.status(400).json({err})
    }
})

//update person route
router.patch('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id)
        const updatedPerson = await person.update()
        res.json({person: updatedPerson})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;