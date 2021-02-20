const db = require("../db");

async function getName(id) {
    const connection = await db.getConnection();
    const [results] = await connection.query('SELECT name FROM users WHERE id = ?', [id]);
    connection.release();
    if(results){
        return results
    }
    return null

      
}
module.exports.getName=getName;