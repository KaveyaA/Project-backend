const mongoose = require('mongoose')


// const connect= async()=>{
//     const copoConnection = await mongoose.createConnection(process.env.COPODB_URI, 
//         {connectTimeoutMS: 20000},
//         function(err){
//         if(err) throw err;
//     });
//     return copoConnection;
// }
const copoConnection =  mongoose.createConnection(process.env.COPODB_URI, function(err){
    if(err){
        throw err;
    }
})


const coqpMapping = copoConnection.model('CO-QP-Mapping',require('./../schemas/copo/co-qp-mappingSchema'));

const assessMarksModel = copoConnection.model('Assess-Marks',require('./../schemas/copo/assess-marks-Schema'));

const cotBasedOnMarksModel = copoConnection.model('COT-Mark-Based',require('./../schemas/copo/cot-based-marks-Schema'))

const copercentage = copoConnection.model('CO Percentage',require('./../schemas/copo/co-percentage-Schema'))

const endSemMarksModel = copoConnection.model('EndSem-Marks',require('./../schemas/copo/endsem-marks-Schema'));

module.exports = {coqpMapping, assessMarksModel, cotBasedOnMarksModel, copercentage, endSemMarksModel}        