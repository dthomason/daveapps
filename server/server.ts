import express from 'express'

const SERVER_PORT = 4000;
const app = express();

const server = app.listen(SERVER_PORT, () =>
  // eslint-disable-next-line no-console
  console.info(`🚀 Server ready at: http://localhost:${SERVER_PORT}`),
);

export default server;
