const express = require('express');
const expressOasGenerator = require('express-oas-generator');
const swagger = require('./swagger.json');

const makeLocalServer = async (port = 0, debug = false) => {
  const app = express();

  expressOasGenerator.handleResponses(app, {
    predefinedSpec: swagger,
    specOutputPath: './swagger.json',
    writeIntervalMs: 100,
  });

  app.use(express.json());

  app.get('/data', (req, res) => {
    const data = {
      id: 1,
      name: 'unknown',
      activated: true,
    };

    return res.status(200).send(data);
  });

  expressOasGenerator.handleRequests();

  const server = app.listen(port, () => {
    if (debug) {
      console.log(
        `Up and running on port ${port}! GET endpoint: http://localhost:${port}/data`
      );
    }
  });

  return server;
};

module.exports = { makeLocalServer };
