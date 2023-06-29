const mongoose = require('mongoose')

const copercentage = mongoose.Schema({
    batchidcidatype : {
        type: String,
        required: [true,"Please add bidcid"],
        unique : true,
    },
    co1:{
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co2:{
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co3:{
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co4:{
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co5:{
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co6:{
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
  
})
module.exports = copercentage;