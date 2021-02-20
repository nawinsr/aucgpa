const query = require('./query');
let connection;

module.exports = {
    getConnection: (pool) => {
        connection = pool.getConnection();
        query.setConn(connection);
        return query;
    },    
}