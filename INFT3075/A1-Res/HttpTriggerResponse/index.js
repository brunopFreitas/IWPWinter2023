module.exports = async function (context, req) {
    const mysql = require('mysql')
    const path = require('path')
    const fs = require('fs')

    context.log('JavaScript HTTP trigger function processed a request.')

    // Variable to store the response message
    let responseMessage = ""

    // Get the body of the POST message
    const body = req.body
    
    // Verify items has a value
    if (body.OrderId ||
        body.FirstName &&
        body.LastName
        ) {
            const OrderId = myDbItem.OrderId;
            const FirstName = myDbItem.FirstName;
            const LastName = myDbItem.LastName;
            context.log('Sending request to DB')
            responseMessage = connectAndQuery()
            
    }
    else {
        responseMessage = "There's an issue with your JSON"
    }

    // Send the response (200 ok) to the requestor
    context.res = {
        body: responseMessage
    }

    async function connectAndQuery() {
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
    try { 
            // Create the MySQL connection
            const connection = new mysql.createConnection(config)
            // Connect to MySQL
            connection.connect(function (err) {
                if (err) throw err
            })
            // Execute SQL
            var resultSet = await connection.query('select * from accounting where order_id = ?;', 
            [OrderId], 
            function (err, results, fields) {
                if (err) throw err
            })
            // Close the connection
            connection.end(function (err) {
                if (err) throw err
            })

            return resultSet
    } catch(err) {
        let msg = "Database error" + err
        return msg
    }
}
}