const db = require("../db");
const bcrypt = require("../bcrypt");

async function getRollNo(rollno) {
    
    const connection = await db.getConnection();
    const [results] = await connection.query('SELECT * FROM users WHERE rollno = ?', [rollno]);
    console.log(results);
    connection.release();
    if (results && results[0])
        return results;
    return null;
}
async function insertUser(name, rollno, plainTextPassword) {
    const password = await bcrypt.hash(plainTextPassword);
    const connection = await db.getConnection();
    let success = false;
    try {
        const user = { name, rollno, password };
        await connection.query('INSERT INTO users SET ?', user);
        success = true;
    }
    catch (error) {
        console.log(error);
        await connection.rollback();
    }
    connection.release();
    return success;
}

module.exports.getRollNo = getRollNo;
module.exports.insertUser = insertUser;