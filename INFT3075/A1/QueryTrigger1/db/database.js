var mysql = require('mysql')
var fs = require('fs')
var connection = mysql.createConnection({
    host: 'nscc-w0448225-mysql.mysql.database.azure.com',
    user: 'appuser',
    password: process.env['db_password'], // get password from local.settings.json
    database: 'Development',
    port: 3306,
    ssl: {
        ca: fs.readFileSync(__dirname + "/DigiCertGlobalRootCA.crt.pem")
    }
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  context.log('Database connected')
})
module.exports = connection