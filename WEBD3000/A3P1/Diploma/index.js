const DB = require('../service/getData')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.query.id) {
        const id_parameter = (req.query.id);
        let result = await DB.fetchMyDiplomaData(id_parameter)        
        let httpStatus = DB.analyzeMyReturn(result)        
        context.res = {
            status: httpStatus,
            body: result
        };
    } else {
        let result = await DB.fetchMyDiplomaData("")
        let httpStatus = DB.analyzeMyReturn(result)        
        context.res = {
            status: httpStatus,
            body: result
        };
    }
}

