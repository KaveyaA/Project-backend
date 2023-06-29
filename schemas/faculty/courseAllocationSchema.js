const mongoose = require('mongoose')

const courseAllocationSchema = mongoose.Schema({
    facultyId : {
        type : String,
        required: [true, "Please add Id number"],
        
        // required: true
    },
    batch : {
        type : String,
        required : [true, "Please add batch"]
       
    },
    courseName : {
        type : String,
        required : [true, "Please add course Id"]
    }
})

module.exports = courseAllocationSchema;