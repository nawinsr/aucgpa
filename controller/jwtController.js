const jwt = require('jsonwebtoken');
const config = require('../config/dev');
/**
 *
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function isValid(req, res, next) {
    // logger.info('Verifying JWT process started');

    // Checking whether the client sends auth token
    if (!req.headers.authorization) {
        return res.sendStatus(401);
    }

    // Separate jwt token from authorization header
    const token = req.headers.authorization.replace('Bearer ', '');
    if (token) {
        try {
            const { user_id } = jwt.verify(token, config.JWTSECRET);
            req.userData = {
                user_id
            };
            // logger.info('Verification process over. Processing next()');
            next();
        } catch (err) {
            // logger.info('JWT verification unsuccessful');
            return res.sendStatus(401);
        }
    } else {
        // logger.info('JWT verification unsuccessful');
        return res.sendStatus(401);
    }
}

module.exports.isValid=isValid;