const router = (app) => {
    app.use('/signup', require('./signup'));
    app.use('/login', require('./login'));
    app.use('/dashboard', require('./dashboard'));
  };
  
  module.exports = router;