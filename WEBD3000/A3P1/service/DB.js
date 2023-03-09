const sql = require('mssql')
require('dotenv').config();

module.exports = {
    async connectToMyDB () {
        let DBConnection = await sql.connect(process.env.DB_CONNECTION_STRING)
        return DBConnection
    },

    closeTheConnection (DBConnection) {
        if(DBConnection) {
            DBConnection.close()
            return true
        } else {
            return false
        }
        
    }
}