const mysql = require('mysql')
const path = require('path')
const fs = require('fs')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
     // MySQL Connection Info
     const config =
     {
         host: 'nscc-w0448225-mysql.mysql.database.azure.com',
         user: 'appuser',
         password: process.env['db_password'], // get password from local.settings.json
         database: 'Development',
         port: 3306,
         ssl: {
             ca: fs.readFileSync(__dirname + "/DigiCertGlobalRootCA.crt.pem")
         }
     }
 
     // Create the MySQL connection
     const connection = new mysql.createConnection(config)
 
     // Connect to MySQL
     connection.connect(function (err) {
         if (err) throw err
     })
    
    connection.query('SELECT * FROM accounting', function (err, rows) {
        if (err) { 
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: err
            };
        }
        else {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: rows
            };
        }
    })

    // Close the connection
    connection.end(function (err) {
        if (err) throw err
    })
}