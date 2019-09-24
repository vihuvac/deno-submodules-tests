/**
 * Required modules.
 */
const express = require('express');


// Create the express app.
const app = express();
const port = 3000;

// Endpoints.
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server.
app.listen(port, () => console.log(`Sample app listening on port ${port}!`));
