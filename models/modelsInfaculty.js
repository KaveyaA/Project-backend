const mongoose = require('mongoose')

const facultyConnection = mongoose.createConnection(process.env.FACULTYDB_URI, function(err){
    if(err) throw err;
});

const facultyDetails = facultyConnection.model('facultyDetails', require('./../schemas/faculty/facultyDetailsSchema'))

const courseAllocation = facultyConnection.model('courseAllocations', require('./../schemas/faculty/courseAllocationSchema'))
module.exports = { facultyDetails, courseAllocation };