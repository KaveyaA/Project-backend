const mongoose = require('mongoose')

const assessMarksSchema = mongoose.Schema({
    cidatyperoll : {
        type : String,
        required:[true,"Add cid atype roll"],
        unique: true
    },
    q1: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q2 : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q3 : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q4: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q5: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q6: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q7: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q8: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q9 : {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    q10: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    
})

module.exports = assessMarksSchema;