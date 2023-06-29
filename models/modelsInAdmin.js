const mongoose = require('mongoose')

const adminConnection = mongoose.createConnection(process.env.ADMINDB_URI, function(err){
    if(err) throw err;
});

const adminDetails = adminConnection.model('adminDetails', require('./../schemas/admin/adminDetailsSchema'))


module.exports = { adminDetails };