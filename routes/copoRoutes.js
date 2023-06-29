const express = require('express');
const router = express.Router()

const{ addCoQpMapping, calculateCo, addAssessMarks,addEndSemMarks,calculateCoPercentage,getCO,getCOPercentage,
checkForOA , calculateOA, checkIfMarksEntered} = require('./../controllers/copoController')

router.post('/addcoqpmapping',addCoQpMapping)
router.post('/calculateco',calculateCo)
router.post('/addassessmarks',addAssessMarks)
router.post('/addendsemmarks',addEndSemMarks)
router.post('/co',calculateCoPercentage)
router.post('/copercent',getCOPercentage)  
router.post('/getco',getCO)
router.post('/checkoa',checkForOA);
router.post('/oa',calculateOA);
router.post('/checkmarks',checkIfMarksEntered);

module.exports = router;         