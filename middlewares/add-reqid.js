const uuidv4 = require('uuid/v4');
const httpContext = require('express-http-context');

module.exports = (req, res, next) => {
  httpContext.set('reqId', uuidv4());
  next();
};
