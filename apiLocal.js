const { makeLocalServer } = require('./localServer');

const port = process.env.port || 5000;

(async function localInit() {
  await makeLocalServer(port, true);
})();
