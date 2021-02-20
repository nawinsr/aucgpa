const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async-middleware');
const jwtController = require('../controller/jwtController');
const dashboardcontroller= require('../controller/dashboard_controller')


router.get("/",[
    jwtController.isValid,
    asyncMiddleware(dashboardcontroller.showName),
]);

module.exports = router;
