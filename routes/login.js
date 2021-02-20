const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async-middleware');
const logincontroller= require('../controller/login_controller')


router.post("/",[
    asyncMiddleware(logincontroller.login),
]);

module.exports = router;