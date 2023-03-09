const DB = require('../service/getData')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.query.id) {
        const id_parameter = (req.query.id);
        let result = await DB.fetchMyAcademicYearData(id_parameter)        
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: result
        };
    } else {
        let result = await DB.fetchMyAcademicYearData("")
        context.res = {
        // status: 200, /* Defaults to 200 */
            body: result
        };
    }
}

