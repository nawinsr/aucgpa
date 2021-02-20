const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async-middleware');
const signupcontroller= require("../controller/signup_controller");


router.post("/",[
    asyncMiddleware(signupcontroller.signupStudent),
]);

module.exports = router;