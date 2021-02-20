const db = require("../db");
const bcrypt = require("../bcrypt");

async function login(rollno, password) {
    const connection = await db.getConnection();
    const [results] = await connection.query('SELECT * FROM users WHERE rollno = ?', [rollno]);
    connection.release();
    if (!results || !results[0])
        return false;

    const dbDetails = results[0];  
    console.log([dbDetails.password]);
    if (bcrypt.compare(password, dbDetails.password) === false)
        return false;

    return dbDetails;
}

module.exports.login=login;