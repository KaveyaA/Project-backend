const mongoose = require('mongoose')

const cotBasedOnMarksSchema = mongoose.Schema({
    batchidcidatype : {
        type: String,
        required: [true,"Please add bidcid"],
        unique : true,
    },
    co1Marks : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co2Marks : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co3Marks : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co4Marks : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co5Marks : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    co6Marks : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },

})
module.exports = cotBasedOnMarksSchema;