const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const multer = require("multer")
// const csv = require("csv-parser");
const fs = require("fs");
const csvtojson = require("csvtojson")
const asyncHandler = require('express-async-handler')

const app = express()
           
// middlewares     
app.use(express.json())   
app.use(express.urlencoded({ extended : true}))
app.use(bodyParser.json()) 
app.use(cors())

const PORT = process.env.PORT || 5000

const adminRoutes = require('./routes/adminRoutes')
const facultyRoutes = require('./routes/facultyRoutes')
const copoRoutes = require('./routes/copoRoutes')
app.use(facultyRoutes)

// Routes
app.get("/", (req, res) => {
    res.send("Helloo");
});

app.post("/pst", async(req, res) => {
    const{name} = req.body;
    res.send({name});
})
const studentConnection = mongoose.createConnection(process.env.STUDENTDB_URI,{ useNewUrlParser: true }, function(err){
    if(err) throw err;  
});  

app.use(adminRoutes)


// add batch functionality
let uploadedfilename="hi",collname="hey";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log('hhiiii')
      cb(null, './images')   
    },
    filename: function (req, file, cb) {
        uploadedfilename = file.originalname
        collname = uploadedfilename.substring(0,uploadedfilename.length-4)
      cb(null, uploadedfilename); 
    }
   })

  const upload = multer({ storage: storage });

app.post('/addbatch',  upload.single("myFile"), (req, res,next)=>{
    next()
// console.log(req.file.originalname);
// res.send("File Uploaded Successfully")

}, function(req,res){  
csvtojson().fromFile('./images/'+uploadedfilename)
.then(csvData => {
    studentConnection.collection(collname).insertMany(csvData)
    res.send("File Uploaded Successfully")
    console.log(csvData);
    fs.unlink('./images/'+uploadedfilename,err => {
        if(err)
            console.log(err)
    })
    console.log('File deleted successfully');

})
// .catch( function(err){
//     console.log(err)
// })

})




app.listen(PORT, () => {
    console.log('Connected to port:',PORT);
})

// to get collection names from dummy db:
app.get('/batcheslist', (req, res) => {
    studentConnection.db.listCollections().toArray().then(collections => {
      const collectionNames = collections.map(collection => collection.name);
      res.json({ collections: collectionNames });
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });    
  });

  
  app.post('/getstudentlist',async(req, res) => {
    const{ batch } = req.body;     
    //running code
//    const a = await dummy.db.collection(batch).find({}).toArray().then(
//         res.send('done')  
//     )
//     console.log(a)

const a = await studentConnection.db.collection(batch).find({}).sort( { "Roll No": -1, "_id": 1 } ).toArray()
       // console.log(a)
       if(a){  
        res.json(a)
       }   
        
    });

   


app.use(copoRoutes)

