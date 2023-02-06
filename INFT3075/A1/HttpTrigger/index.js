module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.')

    // Variable to store the response message
    let responseMessage = ""

    // Get the body of the POST message
    const body = req.body
    
    // Verify items has a value
    if (body.OrderId &&
        body.FirstName &&
        body.LastName &&
        body.CreditNum &&
        body.CreditExpiry &&
        body.PaymentDate &&
        body.Address &&
        body.City &&
        body.Province &&
        body.Country &&
        body.PostalCode
        ) {
            responseMessage = "JSON validated"
            context.bindings.outputQueueItem = (body)
    }
    else {
        responseMessage = "There's an issue with your JSON"
    }

    // Send the response (200 ok) to the requestor
    context.res = {
        body: responseMessage
    }
}