const mongoose = require('mongoose')

const courseConnection = mongoose.createConnection(process.env.COURSEDB_URI, function(err){
    if(err) throw err;
})

const courseCurriculum = courseConnection.model('coursecurriculums', require('./../schemas/course/courseCurriculumSchema'))

const copoMapping = courseConnection.model('COPO-Mappings',require('./../schemas/course/copoMapping'))

module.exports = {courseCurriculum, copoMapping}

