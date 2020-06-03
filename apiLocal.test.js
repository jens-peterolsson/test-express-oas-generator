const got = require('got');

const { makeLocalServer } = require('./localServer');

let server;

const serverPath = () => `http://localhost:${server.address().port}`;

beforeEach(async () => {
  server = await makeLocalServer(0, false);
});

afterEach(() => {
  server.close();
});

describe('GET', () => {
  test('Returns 200 for correct route', async () => {
    const response = await got({ url: `${serverPath()}/data` });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).id).toBe(1);
  });
});
