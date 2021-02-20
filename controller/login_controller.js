const model = require("../model/login_model");
const jwt = require('jsonwebtoken');
const config = require('../config/dev');


async function login(req, res) {
  const rollno = req.body.rollno;
  const  password = req.body.password;
    console.log(rollno,password);
    try {
        const result = await model.login(rollno, password);
        if (result === false) {
            res.status(200).json(false);
        } else {
            let token;
            const jwtInfo = {
                user_id: result.id
            }
            token = jwt.sign({ ...jwtInfo }, config.JWTSECRET);
            return res.status(200).json(token);
        }
    } catch (err) {
        // logger.error(err);
        console.log(err);
        res.sendStatus(400);
    }
}

module.exports.login = login;