const mongoose = require('mongoose')
//mca course articulation matrix
const copoMapping = mongoose.Schema({
    EthicalHackingCO1:{
        type : Array
    },
    EthicalHackingCO2:{
        type : Array
    }, 
    EthicalHackingCO3:{
        type : Array
    },
    EthicalHackingCO4:{
        type : Array
    }, 
    EthicalHackingCO5:{
        type : Array
    }, 
    EthicalHackingCO6:{
        type : Array
    },
    DeepLearningCO1:{
        type : Array
    },
    DeepLearningCO2:{
        type : Array
    },
    DeepLearningCO3:{
        type : Array
    },
    DeepLearningCO4:{
        type : Array
    },
    DeepLearningCO5:{
        type : Array
    },
    DeepLearningCO6:{
        type : Array
    },
    MobileApplicationDevelopmentCO1:{
        type : Array
    },
    MobileApplicationDevelopmentCO2:{
        type : Array
    },
    MobileApplicationDevelopmentCO3:{
        type : Array
    },
    MobileApplicationDevelopmentCO4:{
        type : Array
    },
    MobileApplicationDevelopmentCO5:{
        type : Array
    },
    MobileApplicationDevelopmentCO6:{
        type : Array
    }


    
    
});

module.exports = copoMapping;