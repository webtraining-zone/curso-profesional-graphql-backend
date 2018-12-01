const createServer = require('./server');
const db = require('./database');
const server = createServer();

// @TODO: Express middleware for cookies (JWT)

// @TODO: Express middleware for populating current user

// The front-end Next.js will access this server
server.start({
  cors: {
    credentials: true,
    origin: '*',
  },
}, ({port}) => {
  console.log(`Server started, listening on port ${port} for incoming requests.`);
});

