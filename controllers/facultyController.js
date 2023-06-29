const asyncHandler = require('express-async-handler')

// using bcrypt for decrypting password in check password correct during login
const bcrypt = require('bcryptjs')

const {facultyDetails, courseAllocation} = require('./../models/modelsInfaculty')
const{ coqpMapping } = require('./../models/modelsInCoPo')
const loginFaculty = asyncHandler( async(req, res) => {
    const{ facultyId, facultyPassword} = req.body;

        // validation
        if(!facultyId || !facultyPassword){
            res.status(400);
            throw new Error("Please add id and password")
        }
        // check if faculty exists
        const faculty = await facultyDetails.findOne({facultyId})
       
        if(!faculty){
            res.status(400);
            throw new Error("Please enter correct id.");
   
        }
        // If faculty exists check password is correct
        // const passwordIsCorrect = await 
        const passwordIsCorrect = await bcrypt.compare(facultyPassword, faculty.facultyPassword)
       
        if(faculty && passwordIsCorrect){
            res.status(200).send('Login successful')
        }
        else{
            res.status(400);
            throw new Error("Invalid email or password");
        }
       

    
})

//get allocated courses for a faculty
const coursesOfFaculty = asyncHandler( async(req, res) => {
    const{facultyId} = req.body;

    const coursesOfFacultyObj = await courseAllocation.find({ facultyId : facultyId},{courseName : 1,batch :1,_id : 0})
if(coursesOfFacultyObj)
    res.send(coursesOfFacultyObj)
else{
    res.send('empty')
}
})

 //check if q paper is already uploaded
 const checkQpaper = asyncHandler( async(req, res)=>{
    const{bidcidatype}= req.body;
    const a = await coqpMapping.findOne({batchidcidatype:bidcidatype})
    if(a){
        res.send('Question paper is already set.')
    }
    else{
        res.send('Proceed')
    }
 })
const getfacultyname = asyncHandler( async(req, res) => {
    const{facultyId} = req.body;
    const a = await facultyDetails.findOne({facultyId:facultyId},{facultyName : 1,_id:0})
    res.json(a)
})
module.exports = {
     loginFaculty, coursesOfFaculty, checkQpaper,getfacultyname
}