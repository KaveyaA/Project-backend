const express = require('express');
const router = express.Router()
const {loginFaculty, coursesOfFaculty, checkQpaper, getfacultyname} = require('./../controllers/facultyController');

router.post('/loginFaculty', loginFaculty)
router.post('/facultycourses',coursesOfFaculty)
router.post('/checkqpaper',checkQpaper)
router.post('/facname',getfacultyname)
// router.get('/getCoursesAssigned', getCoursesAssigned)
module.exports = router;
