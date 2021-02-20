const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const httpContext = require('express-http-context');
const terminate = require('./terminate');

const db = require('./db');
const config = require('./config/dev');
const router = require('./routes');

const app = express();

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// To shutdown the node properly
const exitHandler = terminate(app, {
  coredump: false,
  timeout: 500,
});

process.on('uncaughtException', exitHandler(1, 'Unexpected Error'));
process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'));
process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
process.on('SIGINT', exitHandler(0, 'SIGINT'));


// Middlewares

app.use(httpContext.middleware);

initDB();

router(app);

// const tenSecs = 10000;
// const rand =  Math.floor(Math.random() * tenSecs) + tenSecs;
// logger.info(rand);
// setTimeout((function() {
//   return process.exit();
// }), rand);

/**
 *
 *
 */
async function initDB() {
  await db.init(config);
  initServer();
}

/**
 *
 *
 */
function initServer() {
  app.listen(4000, () => {
    // logger.info('App Started');
    console.log("Server Started");
  });
}
