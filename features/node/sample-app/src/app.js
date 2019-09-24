/**
 * Required modules.
 */
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');


// Create the express app.
const app = express();
const port = 3000;

// Middlewares.
app.use(bodyParser.json());

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
app.get('/people/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    // SWAPI returns a json formatted content by default.
    const people = await axios.get(`${SWAPI_URL}/people/${id}`);
    res.send(people.data);
  } catch (error) {
    next(error);
  }
});

app.post('/people', async (req, res, next) => {
  try {
    // This opens up the writeable stream to people.js.
    const writeStream = fs.createWriteStream('./src/people.json');

    // Write the POST data to the file.
    writeStream.write(JSON.stringify(req.body));

    // In case of any errors occurs.
    writeStream.on('error', (error) => next(error));

    // Close the writable stream.
    writeStream.end();

    // After all the data is saved, respond with a simple message within an object.
    writeStream.on('finish', () => res.send({
      message: 'A new person has been successfully added to the star wars world.',
    }));
  } catch (error) {
    next(error);
  }
});

// Start the server.
app.listen(port, () => console.log(`Sample app listening on port ${port}!`));
