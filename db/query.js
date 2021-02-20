let connection;

module.exports = {
    setConn: (dbConn) => {
        connection = dbConn;
    },
    query: async (str, arr) => {
        const [rows, fields] = await dbConn.query(str, arr);
        return rows;
    }
}