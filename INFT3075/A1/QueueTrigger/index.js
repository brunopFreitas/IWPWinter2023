const mysql = require('mysql')
const path = require('path')
const fs = require('fs')

module.exports = async function (context, myQueueItem) {

    const OrderId = myQueueItem.OrderId;
    const FirstName = myQueueItem.FirstName;
    const LastName = myQueueItem.LastName;
    const CreditNum = myQueueItem.CreditNum;
    const CreditExpiry = myQueueItem.CreditExpiry;
    const PaymentDate = myQueueItem.PaymentDate;
    const Address = myQueueItem.Address;
    const City = myQueueItem.City;
    const Province = myQueueItem.Province;
    const Country = myQueueItem.Country;
    const PostalCode = myQueueItem.PostalCode;


    context.log('JavaScript queue trigger function processed work item: ', myQueueItem)

    /*************** Insert data into MySQL ******************/

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

    // Execute SQL
    connection.query('insert into accounting(order_id, first_name, last_name, credit_num, credit_expiry, payment_date) values (?,?,?,?,?,?);', 
    [OrderId, FirstName, LastName, CreditNum, CreditExpiry, PaymentDate], 
    function (err, results, fields) {
        if (err) throw err
    })

    // Execute SQL
    connection.query('insert into shipping(order_id, first_name, last_name, address, city, province, country, postalCode) values (?,?,?,?,?,?,?,?);', 
    [OrderId, FirstName, LastName, Address, City, Province, Country, PostalCode], 
    function (err, results, fields) {
        if (err) throw err
    })

    // Close the connection
    connection.end(function (err) {
        if (err) throw err
    })
}