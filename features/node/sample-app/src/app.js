/**
 * Required modules.
 */
const express = require('express');
const axios = require('axios');


// Create the express app.
const app = express();
const port = 3000;

// Const variables.
const SWAPI_URL = 'https://swapi.co/api';

// Endpoints.
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/people', async (req, res, next) => {
  try {
    // SWAPI returns a json formatted content by default.
    const people = await axios.get(`${SWAPI_URL}/people`);
    res.send(people.data);
  } catch (error) {
    next(error);
  }
});

// Start the server.
app.listen(port, () => console.log(`Sample app listening on port ${port}!`));
