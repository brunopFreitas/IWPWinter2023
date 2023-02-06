module.exports = async function (myDbItem) {

    const mysql = require('mysql')
    const path = require('path')
    const fs = require('fs')

    const OrderId = myDbItem.OrderId;
    const FirstName = myDbItem.FirstName;
    const LastName = myDbItem.LastName;
    let msg

    console.log

    /*************** Insert data into MySQL ******************/



    connectAndQuery()


}