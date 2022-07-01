import express from 'express'
const app = express();

const SERVER_PORT = 4000;

const server = app.listen(SERVER_PORT, () =>
  // eslint-disable-next-line no-console
  console.info(`🚀 Server ready at: http://localhost:${SERVER_PORT}`),
);

export default server;
