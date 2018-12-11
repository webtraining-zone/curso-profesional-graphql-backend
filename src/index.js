const createServer = require('./server');
const db = require('./database');
const server = createServer();

// @TODO: Express middleware for cookies (JWT)

// @TODO: Express middleware for populating current user

// The front-end Next.js will access this server
server.start({
  cors: {
    credentials: true,
    origin: ['http://localhost:8085', 'http://graphql-frontend.webtraining.fun', 'http://localhost:4400/', 'http://localhost:3000/'],
    // methods: 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE',
    // allowedHeaders: [
    //   'Access-Control-Allow-Headers',
    //   'Access-Control-Allow-Origin',
    //   'Content-Type',
    //   'Authorization'],
    // exposedHeaders: [
    //   'Access-Control-Allow-Headers',
    //   'Access-Control-Allow-Origin',
    //   'Content-Type',
    //   'Authorization'],
    // preflightContinue: false,
  },
}, ({port}) => {
  console.log(`Server started, listening on port ${port} for incoming requests.`);
});

