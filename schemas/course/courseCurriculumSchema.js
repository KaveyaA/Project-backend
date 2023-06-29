const mongoose = require('mongoose')

const courseCurriculum = mongoose.Schema({
    programmeId : {
        type : String,
        required : [true, "Please add a PID."]
    },
    programmeName : {
        type : String,
        required : [true, "Please add a programme name."]
    },
    semesterType : {
        type : Number,
        required : [true, "Please add a semester."]
    },
    courseName : {
        type : String,
        required : [true, "Please add a course name."]
    },
    courseId : {
        type : String,
        required : [true, "Please add a cID."]
    }
});

module.exports = courseCurriculum;