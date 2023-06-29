const asyncHandler = require('express-async-handler')
const multer = require("multer")
const fs = require("fs");
const csvtojson = require("csvtojson")
const mongoose = require('mongoose')

// using bcrypt for decrypting password in check password correct during login
const bcrypt = require('bcryptjs')

const {facultyDetails, courseAllocation} = require('./../models/modelsInfaculty')
const {adminDetails} = require('./../models/modelsInAdmin')
const {courseCurriculum, copoMapping} =  require('./../models/modelsInCourse')

const getFaculty = asyncHandler( async(req,res) => {
    const facultyDetailsObj = await facultyDetails.find();
    if(facultyDetailsObj)
        res.json({facultyDetailsObj});
    else res.json("empty");
})

const setFaculty = asyncHandler( async(req,res) => {
    const{facultyId, facultyName, facultyDesignation} = req.body;

    // validation
    if(!facultyId || !facultyName || !facultyDesignation){
        res.status(400);
        throw new Error("Please fill all fields")
    }

    // check if faculty already exists
    const facultyExists = await facultyDetails.findOne({facultyId})
    if(facultyExists){
        res.send('Faculty is already registered.')
        res.status(400);
      
        throw new Error("Faculty is already registered.")
        
    }

     // create new faculty
     const faculty = await facultyDetails.create({
        facultyName,
        facultyId,
        facultyDesignation
    })
    if(faculty){
        // const{_id, facultyId,facultyName,facultyPassword,facultyDesignation} = faculty
        // res.status(200).json({
        //     _id,
        //     facultyName,
        //     facultyId,
        //     facultyPassword,
        //     facultyDesignation
        // })
         res.status(200).send('Faculty created')
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
        
    }
    
})

const updateFaculty = asyncHandler( async(req,res) => {
    // const id = req.params.id;

    const{ facultyName, facultyDesignation, facultyId } = req.body;
    let facultyDetailsObj;

    try{
            facultyDetailsObj = await facultyDetails.findOneAndUpdate({ facultyId},{
                facultyName : facultyName ,
                  facultyDesignation : facultyDesignation
            })
        
        facultyDetailsObj = await facultyDetailsObj.save()
        res.send('updated')
    }
    catch(err){
        res.send(err)
    }
    if(!facultyDetailsObj){
        return res.status(500).json({message : 'Unable to update faculty'})
    }

})

const deleteFaculty = asyncHandler( async(req, res) => {
    
    const{ facultyId} = req.body;
    let facultyDetailsObj
    try{
         facultyDetailsObj = await facultyDetails.findOneAndDelete({facultyId})
    }
    catch(err){
        console.log(err)
    }
    if(!facultyDetailsObj){
        res.status(500).json({message : 'Unable to delete faculty'})
    }
    else res.status(201).json({message : 'Deleted faculty successfully'})
})

const getAdmin = asyncHandler( async(req,res) => {
    const adminDetailsObj = await adminDetails.find({});
    if(adminDetailsObj)
        res.json({adminDetailsObj});
    else res.json("empty");
})

const setAdmin = asyncHandler( async(req,res) => {
    const{adminId, adminName} = req.body;
    // faculty password is by default 123
    const adminDetailsObj = await new adminDetails({
        adminId : adminId,
        adminName : adminName,
    })
    await adminDetailsObj.save();
    res.send('saved')
})

const loginAdmin = asyncHandler( async(req, res) => {
    const{ adminId, adminPassword} = req.body;
    
        // validation
        if(!adminId || !adminPassword){
            res.status(400);
            throw new Error("Please add id and password")
        }
        // check if admin exists
        const admin = await adminDetails.findOne({adminId})
       
        if(!admin){
            res.status(400);
            throw new Error("Please enter correct id.");
   
        }
        // If faculty exists check password is correct
        // const passwordIsCorrect = await 
        // If admin exists check password is correct
        const passwordIsCorrect = await bcrypt.compare(adminPassword, admin.adminPassword)
      
        if(admin&& passwordIsCorrect ){
            res.status(200).send('Login successful')
        }
        else{
            res.status(400);
            throw new Error("Invalid email or password");
        }
        // console.log(faculty.facultyPassword)
        // console.log('now',facultyPassword)

    
})
const getCourseCurriculum = asyncHandler(async(req, res) => {
    const courseCurriculumObj = await courseCurriculum.find({});
    if(courseCurriculumObj)
        res.json({courseCurriculumObj});
    else res.json("empty");
})

const  setCourseCurriculum= asyncHandler( async(req,res) => {
    const{programmeId, programmeName, courseId, courseName, semesterType} = req.body;
    // faculty password is by default 123
    const courseCurriculumObj = await new courseCurriculum({
       programmeId : programmeId,
       programmeName : programmeName,
       courseId : courseId,
       courseName : courseName,
       semesterType : semesterType
    })
    await courseCurriculumObj.save();
    res.send('Saved successfully')
})

const deleteCourseCurriculum = asyncHandler( async(req, res) =>{
    const{ courseName} = req.body;
    let courseCurriculumObj;
    console.log(courseName)
    try{
        courseCurriculumObj = await courseCurriculum.findOneAndDelete({courseName})
    }
    catch(err){
        console.log(err)
    }
    if(!courseCurriculumObj){
        res.status(500).json({message : 'Unable to delete course'})
    }
    else res.status(201).json({message : 'Deleted course successfully'})
})
// get courses for a given batch and semester
const getCourses = asyncHandler( async(req, res) => {
    const{programmeName, semesterType} = req.body;
    
    // const courseAllocationObj = await courseCurriculum.find({programmeName : programmeName,semester : semester},{courseName : 1, _id: 0})
    const courseAllocationObj = await courseCurriculum.find({programmeName : programmeName,semesterType : semesterType},{courseName : 1, _id: 0})

//programmeName : programmeName,semester : semester
    // console.log(courseAllocationObj)
    res.json(courseAllocationObj)

})


// get all faculty names
const getFacultyNamesAndId = asyncHandler( async(req,res) => {
    const facultyDetailsObj = await facultyDetails.find({},{facultyName : 1,facultyId:1, _id : 0});
    if(facultyDetailsObj)
        res.json(facultyDetailsObj);
    else res.json("empty");
})

// allocate courses
const allocatecourses = asyncHandler( async(req, res) => {
    const{facultyId, courseName, batch} = req.body;

    const allocatecoursesobj = await courseAllocation.create({
        facultyId, courseName, batch
    })
    if(allocatecoursesobj){
        res.json('done')
    }
    else{
        res.send('empty')
    }
})

// get all faculty  id
const getFacultyIds = asyncHandler( async(req,res) => {
    const facultyDetailsObj = await facultyDetails.find({},{facultyId : 1, _id : 0});
    if(facultyDetailsObj)
        res.json(facultyDetailsObj);
    else res.json("empty");
})


//set copomapping
const setCopoMapping = asyncHandler( async(req, res) => {
    const{EthicalHackingCO1,EthicalHackingCO2,EthicalHackingCO3,EthicalHackingCO4,EthicalHackingCO5,EthicalHackingCO6,
        DeepLearningCO1,DeepLearningCO2,DeepLearningCO3,DeepLearningCO4,DeepLearningCO5,DeepLearningCO6, 
        MobileApplicationDevelopmentCO1,MobileApplicationDevelopmentCO2,MobileApplicationDevelopmentCO3,
        MobileApplicationDevelopmentCO4,MobileApplicationDevelopmentCO5,MobileApplicationDevelopmentCO6
    
    } = req.body;

    const copoMappingObj = await copoMapping.create({
        EthicalHackingCO1,EthicalHackingCO2,EthicalHackingCO3,EthicalHackingCO4,EthicalHackingCO5,EthicalHackingCO6,
        DeepLearningCO1,DeepLearningCO2,DeepLearningCO3,DeepLearningCO4,DeepLearningCO5,DeepLearningCO6,
        MobileApplicationDevelopmentCO1,MobileApplicationDevelopmentCO2,MobileApplicationDevelopmentCO3,
        MobileApplicationDevelopmentCO4,MobileApplicationDevelopmentCO5,MobileApplicationDevelopmentCO6
    
    })
    if(copoMappingObj){
        res.json(copoMappingObj)
    }
    else{
        res.send('failed')
    }
})
  
//display courses for a programme from cc
const getAllCoursesForProgramme = asyncHandler( async(req, res) => {
        const{programmeName} = req.body;

        const a = await courseCurriculum.find({programmeName: programmeName},{courseName : 1,_id:0});
        if(a){
            res.json(a)
        }
        else{ 
            res.send('No courses found')
        }
})

module.exports = { getFaculty, setFaculty, updateFaculty, deleteFaculty, getAdmin, setAdmin, loginAdmin,
    getCourses,getFacultyNamesAndId, getCourseCurriculum, setCourseCurriculum, allocatecourses, 
    getFacultyIds, setCopoMapping, getAllCoursesForProgramme, deleteCourseCurriculum
}