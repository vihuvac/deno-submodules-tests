/**
 * Required modules.
 */
const fs = require('fs');
const axios = require('axios');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Create the express app.
const app = express();
const port = 3000;
const bodyParserSettings = {
  limit: '10mb',
  extended: true,
};

// External API (Ice and Fire based on GoT).
const API_URL = 'https://www.anapioficeandfire.com/api';

// Middlewares.
app.use(bodyParser.json(bodyParserSettings));
app.use(bodyParser.urlencoded(bodyParserSettings));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Endpoints.
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/houses', async (req, res, next) => {
  try {
    // The API returns a json formatted content by default.
    const houses = await axios.get(`${API_URL}/houses`);
    res.send(houses.data);
  } catch (error) {
    next(error);
  }
});
app.get('/houses/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    // SWAPI returns a json formatted content by default.
    const house = await axios.get(`${API_URL}/houses/${id}`);
    res.send(house.data);
  } catch (error) {
    next(error);
  }
});

/**
 * Create an async write stream.
 *
 * @param {String} desFile The destination file with the written data.
 * @param {String} data    The data for being written.
 * @return {Object}        A write stream promise with its respective data.
 */
const createFileWriteStream = async ({
  desFile,
  data,
}) => new Promise((resolve, reject) => {
  // This opens up the writeable stream to <desFile>.
  const stream = fs.createWriteStream(desFile);

  // Write the POST data to the file.
  stream.write(JSON.stringify(data));

  // In case of any errors occurs.
  stream.on('error', (error) => {
    const errMsg = 'There was an error creating a write stream for the file'
      + ` ${desFile}. ${error}`;
    console.warn(errMsg);
    reject(error);
  });

  // Close the writable stream.
  stream.end();

  // After all the data is saved, respond with a simple message within an object.
  stream.on('finish', () => resolve({
    message: 'All the houses were successfully stored in a json file.',
  }));
});

app.post('/houses', async (req, res, next) => {
  try {
    // Instantiate the asynchronous write stream.
    const writeStream = await createFileWriteStream({
      desFile: './src/houses.json',
      data: req.body,
    });

    if (!writeStream) {
      const errMsg = 'Oops! Something went wrong. The file write stream failed.';
      console.warn(errMsg);
      next(errMsg);
    }

    res.send(writeStream);
  } catch (error) {
    next(error);
  }
});

// Start the server.
app.listen(port, () => console.log(`Sample app listening on port: ${port}`));
