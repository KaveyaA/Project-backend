const express = require('express');
const router = express.Router()

const{ getFaculty, setFaculty,updateFaculty,deleteFaculty,
     getAdmin, setAdmin, loginAdmin, getCourseCurriculum,getCourses,
     getFacultyNamesAndId, setCourseCurriculum, allocatecourses, getFacultyIds
, setCopoMapping, getAllCoursesForProgramme, deleteCourseCurriculum} = require('./../controllers/adminController')

router.get('/getfaculty', getFaculty )
router.post('/setfaculty', setFaculty)
router.put('/updatefaculty',updateFaculty)
router.delete('/deletefaculty',deleteFaculty)
router.get('/getadmin', getAdmin )
router.post('/setadmin', setAdmin)
router.post('/loginadmin', loginAdmin)
router.get('/getcoursecurriculum',getCourseCurriculum)
router.post('/setcoursecurriculum', setCourseCurriculum)
router.delete('/deletecoursecurriculum', deleteCourseCurriculum)
router.post('/getcourses', getCourses)
router.get('/getfacultynamesid', getFacultyNamesAndId)
router.post('/allocatecourses',allocatecourses)
router.post('/setcopomapping',setCopoMapping)

router.get('/getfacultyids',getFacultyIds)

router.post('/getallcourses',getAllCoursesForProgramme)
// router.get('/getBatches', getBatches)

// router.post('/addbatch', addBatch)

module.exports = router;
