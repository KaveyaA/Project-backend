const mongoose = require('mongoose')
// for storing hashed passwords:
const bcrypt = require('bcryptjs')

const adminDetailsSchema = mongoose.Schema({
    adminName : {
        type : String,
        required: [true, "Please add a name"]
        // required: true,
    },
    adminId : {
        type : Number,
        required: [true, "Please add Id number"],
        unique : true,
        // required: true
    },
    adminPassword : {
        type : String,
        default: '123',
    }
},
{
    timstamps: true,
}
)
// encrypt password 
adminDetailsSchema.pre("save", async function(next){
    try{
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.adminPassword, salt)
    this.adminPassword = hashedPassword;
    next();
    }catch(err){
        next(err);
    }
},
);
module.exports = adminDetailsSchema;