const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const peopleRoutes = require('./controllers/people')
server.use('/people', peopleRoutes)

// Root Route
server.get('/', (req, res) => res.send('Hey party people'))

module.exports = server