const mongoose = require('mongoose')

const coqpMapping = mongoose.Schema({
    batchidcidatype : {
        type: String,
        required: [true,"Please add bidcid"],
        unique : true,
    },
    co1q:{
        type : Array,
        default:'Nil'
    },
    co2q:{
        type : Array,
        default:'Nil'
    },co3q:{
        type : Array,
        default:'Nil'
    },co4q:{
        type : Array,
        default:'Nil'
    },co5q:{
        type : Array,
        default:'Nil'
    },co6q:{
        type : Array,
        default:'Nil'
    },
})

module.exports = coqpMapping;