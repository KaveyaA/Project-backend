const mongoose = require('mongoose')
// for storing hashed passwords:
const bcrypt = require('bcryptjs')


const facultyDetailsSchema = mongoose.Schema({
    facultyName : {
        type : String,
        required: [true, "Please add a name"]
    },
    facultyId : {
        type : Number,
        required: [true, "Please add Id number"],
        unique : true,  
    },
    facultyPassword : {
        type : String,
        default: '123',
    },
    facultyDesignation : {
        type : String,
        required : [true, "Please add designation"]
    },
},
    {
        timstamps: true,
    }
)

// encrypt password before saving to db
facultyDetailsSchema.pre("save", async function(next){
   try{
    // hash password
    const salt = await bcrypt.genSalt(10) //the parameter 10 is no of digits it has to be hashed.
    const hashedPassword = await bcrypt.hash(this.facultyPassword, salt)
    this.facultyPassword = hashedPassword;
    next();
   }
   catch(err){
    next(err)
   }
},{
    timstamps: true,
})

module.exports = facultyDetailsSchema;