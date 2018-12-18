const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createServer = require('./server');
const db = require('./database');
const CONFIG = require('./config');
const server = createServer();

// Express middleware for cookies (JWT)
server.express.use(cookieParser());

// @TODO: Express middleware for populating current user
server.express.use((request, response, next) => {
  const {token} = request.cookies;
  if (token) {
    const {userId} = jwt.verify(token, CONFIG.APP_SECRET);
    request.userId = userId;
  }
  next();
});

// The front-end Next.js will access this server
server.start({
  cors: {
    credentials: true,
    origin: [
      'http://localhost:8085',
      'http://graphql-frontend.webtraining.fun',
      'http://localhost:4400/',
      'http://localhost:3000/'],
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

