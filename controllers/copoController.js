const asyncHandler = require('express-async-handler')

const{coqpMapping, cotBasedOnMarksModel, assessMarksModel, copercentage, endSemMarksModel} = require('./../models/modelsInCoPo');
const {copoMapping }= require('../models/modelsInCourse');
// const{User} = require('/')
const addCoQpMapping = asyncHandler( async(req, res) => {
    const{ batchidcidatype, co1q,co2q,co3q,co4q,co5q,co6q} = req.body;

    const coqpMappingObj = await coqpMapping.create({
        batchidcidatype, co1q,co2q,co3q,co4q,co5q,co6q
    })
    if(coqpMappingObj){
        res.json(coqpMappingObj)
    }
    else{
        res.send('failed')
    }
}
)
 var co1Marks=0,co2Marks =0,co3Marks=0,co4Marks=0,co5Marks=0,co6Marks=0;
const cotBasedOnMarksCalculator = async(co1q,co2q,co3q,co4q,co5q,co6q,target,batchidcidatype) => {
// console.log('co1q',co1q);
// console.log('co2q',co2q);
// console.log('co3q',co3q);
// console.log(target)
co1Marks=0;
co2Marks =0;
co3Marks=0;
co4Marks=0;
co5Marks=0;
co6Marks=0;
 target = parseFloat(target)
// console.log(typeof(target))


for(let i in co1q){
    if(co1q[i]=="Nil"){
        break;
    }
    if(co1q[i] >=1 && co1q[i]<=7){
        co1Marks+=2;
    }
    else if(co1q[i]<=10){
        co1Marks+=12;
    }
   
}
co1Marks = co1Marks*target/100;
console.log('co1marks',co1Marks)

for(let i in co2q){
    if(co2q[i]=="Nil"){
        break;
    }
    if(co2q[i] >=1 && co2q[i]<=7){
        co2Marks+=2;
    }
    else if(co2q[i]<=10){
        co2Marks+=12;
    }
   
}
co2Marks = co2Marks*target/100;
console.log('co2marks',co2Marks)
 console.log('**********')

 for(let i in co3q){
    if(co3q[i]=="Nil"){
        break;
    }
    if(co3q[i] >=1 && co3q[i]<=7){
        co3Marks+=2;
    }
    else if(co3q[i]<=10){
        co3Marks+=12;
    }
}
co3Marks = co3Marks*target/100;
console.log('co3marks',co3Marks)

for(let i in co4q){
    if(co4q[i]=="Nil"){
        console.log('broken')
        break;
    }
    if(co4q[i] >=1 && co4q[i]<=7){
        co4Marks+=2;
    }
    else if(co4q[i]<=10){
        co4Marks+=12;
    }
}
co4Marks = co4Marks*target/100;
console.log('co4marks',co4Marks)

for(let i in co5q){
    if(co5q[i]=="Nil"){
        console.log('broken')
        break;
    }
    if(co5q[i] >=1 && co5q[i]<=7){
        co5Marks+=2;
    }
    else if(co5q[i]<=10){
        co5Marks+=12;
    }
}
co5Marks = co5Marks*target/100;
console.log('co5marks',co5Marks)

for(let i in co6q){
    if(co6q[i]=="Nil"){
        console.log('broken')
        break;
    }
    if(co6q[i] >=1 && co6q[i]<=7){
        co6Marks+=2;
    }
    else if(co6q[i]<=10){
        co6Marks+=12;
    }
}
co6Marks = co6Marks*target/100;
console.log('co6marks',co6Marks)
console.log('cot based on target done')
const a = await cotBasedOnMarksModel.create( {
    batchidcidatype, co1Marks,co2Marks,co3Marks,co4Marks,co5Marks,co6Marks})
if(a){
    console.log('cot based on marks done')
}
co1Marks=0;
co2Marks=0;
co3Marks=0;
co4Marks=0;
co5Marks=0;
co6Marks=0

} 

const cotEndSem = async(co1q,co2q,co3q,co4q,co5q,co6q,target,batchidcidatype) => {
    // console.log('co1q',co1q);
    // console.log('co2q',co2q);
    // console.log('co3q',co3q);
    // console.log(target)
    co1Marks=0;
co2Marks=0;
co3Marks=0;
co4Marks=0;
co5Marks=0;
co6Marks=0
     target = parseFloat(target)
    // console.log(typeof(target))
    
    
    for(let i in co1q){
        if(co1q[i]=="Nil"){
            break;
        }
        if(co1q[i] >=1 && co1q[i]<=10){
            co1Marks+=2;
        }
        else if(co1q[i]<=15){
            co1Marks+=13;
        }
        else if(co1q[i]==16){
            co1Marks+=15
        }
       
    }
    co1Marks = co1Marks*target/100;
    console.log('co1marks',co1Marks)
    
    for(let i in co2q){
        if(co2q[i]=="Nil"){
            break;
        }
        if(co2q[i] >=1 && co2q[i]<=10){
            co2Marks+=2;
        }
        else if(co2q[i]<=15){
            co2Marks+=13;
        }
        else if(co2q[i]==16){
            co2Marks+=15
        }
       
    }
    co2Marks = co2Marks*target/100;
    console.log('co2marks',co2Marks)
     console.log('**********')
    
     for(let i in co3q){
        if(co3q[i]=="Nil"){
            break;
        }
        if(co3q[i] >=1 && co3q[i]<=10){
            co3Marks+=2;
        }
        else if(co3q[i]<=15){
            co3Marks+=13;
        }
        else if(co3q[i]==16){
            co3Marks+=15
        }
    }
    co3Marks = co3Marks*target/100;
    console.log('co3marks',co3Marks)
    
    for(let i in co4q){
        if(co4q[i]=="Nil"){
            console.log('broken')
            break;
        }
        if(co4q[i] >=1 && co4q[i]<=10){
            co4Marks+=2;
        }
        else if(co4q[i]<=15){
            co4Marks+=13;
        }
        else if(co4q[i]==16){
            co4Marks+=15
        }
    }
    co4Marks = co4Marks*target/100;
    console.log('co4marks',co4Marks)
    
    for(let i in co5q){
        if(co5q[i]=="Nil"){
            console.log('broken')
            break;
        }
        if(co5q[i] >=1 && co5q[i]<=10){
            co5Marks+=2;
        }
        else if(co5q[i]<=15){
            co5Marks+=13;
        }
        else if(co5q[i]==16){
            co5Marks+=15
        }
    }
    co5Marks = co5Marks*target/100;
    console.log('co5marks',co5Marks)
    
    for(let i in co6q){
        if(co6q[i]=="Nil"){
            console.log('broken')
            break;
        }
        if(co6q[i] >=1 && co6q[i]<=10){
            co6Marks+=2;
        }
        else if(co6q[i]<=15){
            co6Marks+=12;
        }
        else if(co6q[i]==16){
            co6Marks+=15
        }
    }
    co6Marks = co6Marks*target/100;
    console.log('co6marks',co6Marks)
    console.log('cot based on target done')
    const a = await cotBasedOnMarksModel.create({
        batchidcidatype, co1Marks,co2Marks,co3Marks,co4Marks,co5Marks,co6Marks})
    if(a){
        console.log('cot based on marks stored')
    }

    co1Marks=0;
    co2Marks=0;
    co3Marks=0;
    co4Marks=0;
    co5Marks=0;
    co6Marks=0
    }
    
const coPercentageOfStudents = async(studentList,coqp,cot,batchidcidatype) => {
    //  console.log(typeof(cot))
    // console.log(cot.co1Marks)
// if(cot[0].co1Marks=='1.2')
//     console.log(true)
    var cot1= cot.co1Marks;
    var cot2=cot.co2Marks
    var cot3 = cot.co3Marks;
    var cot4 = cot.co4Marks
    var cot5 = cot.co5Marks
    var cot6 = cot.co6Marks
    var co1q = coqp.co1q;
    var co2q = coqp.co2q, co3q = coqp.co3q;
    var co4q = coqp.co4q;
    var co5q = coqp.co5q;
    var co6q = coqp.co6q;

    var countOfCo1 = 0,countOfCo2 =0,countOfCo3=0,countOfCo4=0,countOfCo5=0,countOfCo6=0;

    for(let key in studentList){
        co1Marks=0;
        // console.log('ch',key,studentList[key].q1)
        for(let i in co1q){
            if(co1q[i]=="Nil"){
                break;
            }
            else if(co1q[i]=='1'){
                co1Marks+=parseFloat(studentList[key].q1);
              
            }else if(co1q[i]=='2'){
                co1Marks+=parseFloat(studentList[key].q2);
            }else if(co1q[i]=='3'){
                co1Marks+=parseFloat(studentList[key].q3);
            }else if(co1q[i]=='4'){
                co1Marks+=parseFloat(studentList[key].q4);
            }else if(co1q[i]=='5'){
                co1Marks+=parseFloat(studentList[key].q5);
            }else if(co1q[i]=='6'){
                co1Marks+=parseFloat(studentList[key].q6);
            }else if(co1q[i]=='7'){
                co1Marks+=parseFloat(studentList[key].q7);
            }else if(co1q[i]=='8'){
                co1Marks+=parseFloat(studentList[key].q8);
            }else if(co1q[i]=='9'){
                co1Marks+=parseFloat(studentList[key].q9);
            }else if(co1q[i]=='10'){
                co1Marks+=parseFloat(studentList[key].q10);
            }
        }
        // console.log(key,co1Marks,cot1)
        if(co1Marks > cot1){
            countOfCo1++;
        }

        //co2
        co2Marks=0;
        for(let i in co2q){
            if(co2q[i]=="Nil"){
                break;
            }
            else if(co2q[i]=='1'){
                co2Marks+=parseFloat(studentList[key].q1);
               
            }else if(co2q[i]=='2'){
                co2Marks+=parseFloat(studentList[key].q2);
            }else if(co2q[i]=='3'){
                co2Marks+=parseFloat(studentList[key].q3);
            }else if(co2q[i]=='4'){
                co2Marks+=parseFloat(studentList[key].q4);
            }else if(co2q[i]=='5'){
                co2Marks+=parseFloat(studentList[key].q5);
            }else if(co2q[i]=='6'){
                co2Marks+=parseFloat(studentList[key].q6);
            }else if(co2q[i]=='7'){
                co2Marks+=parseFloat(studentList[key].q7);
            }else if(co2q[i]=='8'){
                co2Marks+=parseFloat(studentList[key].q8);
            }else if(co2q[i]=='9'){
                co2Marks+=parseFloat(studentList[key].q9);
            }else if(co2q[i]=='10'){
                co2Marks+=parseFloat(studentList[key].q10);
            }
        }
        if(co2Marks > cot2){
            countOfCo2++;
        }

        //co3
        co3Marks=0;
        for(let i in co3q){
            if(co3q[i]=="Nil"){
                break;
            }
            else if(co3q[i]=='1'){
                co3Marks+=parseFloat(studentList[key].q1);
               
            }else if(co3q[i]=='2'){
                co3Marks+=parseFloat(studentList[key].q2);
            }else if(co3q[i]=='3'){
                co3Marks+=parseFloat(studentList[key].q3);
            }else if(co3q[i]=='4'){
                co3Marks+=parseFloat(studentList[key].q4);
            }else if(co3q[i]=='5'){
                co3Marks+=parseFloat(studentList[key].q5);
            }else if(co3q[i]=='6'){
                co3Marks+=parseFloat(studentList[key].q6);
            }else if(co3q[i]=='7'){
                co3Marks+=parseFloat(studentList[key].q7);
            }else if(co3q[i]=='8'){
                co3Marks+=parseFloat(studentList[key].q8);
            }else if(co3q[i]=='9'){
                co3Marks+=parseFloat(studentList[key].q9);
            }else if(co3q[i]=='10'){
                co3Marks+=parseFloat(studentList[key].q10);
            }
        }
        if(co3Marks > cot3){
            countOfCo3++;
        }

        //co4
        co4Marks=0;
        for(let i in co4q){
            if(co4q[i]=="Nil"){
                break;
            }
            else if(co4q[i]=='1'){
                co4Marks+=parseFloat(studentList[key].q1);
               
            }else if(co4q[i]=='2'){
                co4Marks+=parseFloat(studentList[key].q2);
            }else if(co4q[i]=='3'){
                co4Marks+=parseFloat(studentList[key].q3);
            }else if(co4q[i]=='4'){
                co4Marks+=parseFloat(studentList[key].q4);
            }else if(co4q[i]=='5'){
                co4Marks+=parseFloat(studentList[key].q5);
            }else if(co4q[i]=='6'){
                co4Marks+=parseFloat(studentList[key].q6);
            }else if(co4q[i]=='7'){
                co4Marks+=parseFloat(studentList[key].q7);
            }else if(co4q[i]=='8'){
                co4Marks+=parseFloat(studentList[key].q8);
            }else if(co4q[i]=='9'){
                co4Marks+=parseFloat(studentList[key].q9);
            }else if(co4q[i]=='10'){
                co4Marks+=parseFloat(studentList[key].q10);
            }
        }
        if(co4Marks > cot4){
            countOfCo4++;
        }

        //co5
        co5Marks=0;
        for(let i in co5q){
            if(co5q[i]=="Nil"){
                break;
            }
            else if(co5q[i]=='1'){
                co5Marks+=parseFloat(studentList[key].q1);
               
            }else if(co5q[i]=='2'){
                co5Marks+=parseFloat(studentList[key].q2);
            }else if(co5q[i]=='3'){
                co5Marks+=parseFloat(studentList[key].q3);
            }else if(co5q[i]=='4'){
                co5Marks+=parseFloat(studentList[key].q4);
            }else if(co5q[i]=='5'){
                co5Marks+=parseFloat(studentList[key].q5);
            }else if(co5q[i]=='6'){
                co5Marks+=parseFloat(studentList[key].q6);
            }else if(co5q[i]=='7'){
                co5Marks+=parseFloat(studentList[key].q7);
            }else if(co5q[i]=='8'){
                co5Marks+=parseFloat(studentList[key].q8);
            }else if(co5q[i]=='9'){
                co5Marks+=parseFloat(studentList[key].q9);
            }else if(co5q[i]=='10'){
                co5Marks+=parseFloat(studentList[key].q10);
            }
        }
        if(co5Marks > cot5){
            countOfCo5++;
        }


        //co6
        co6Marks=0;
        for(let i in co6q){
            if(co6q[i]=="Nil"){
                break;
            }
            else if(co6q[i]=='1'){
                co6Marks+=parseFloat(studentList[key].q1);
               
            }else if(co6q[i]=='2'){
                co6Marks+=parseFloat(studentList[key].q2);
            }else if(co6q[i]=='3'){
                co6Marks+=parseFloat(studentList[key].q3);
            }else if(co6q[i]=='4'){
                co6Marks+=parseFloat(studentList[key].q4);
            }else if(co6q[i]=='5'){
                co6Marks+=parseFloat(studentList[key].q5);
            }else if(co6q[i]=='6'){
                co6Marks+=parseFloat(studentList[key].q6);
            }else if(co6q[i]=='7'){
                co6Marks+=parseFloat(studentList[key].q7);
            }else if(co6q[i]=='8'){
                co6Marks+=parseFloat(studentList[key].q8);
            }else if(co6q[i]=='9'){
                co6Marks+=parseFloat(studentList[key].q9);
            }else if(co6q[i]=='10'){
                co6Marks+=parseFloat(studentList[key].q10);
            }
        }
        if(co6Marks > cot6){
            countOfCo6++;
        }

        // console.log(studentList[key].cidatyperoll,'-> co1-->',co1Marks)
        // console.log(studentList[key].cidatyperoll,'-> co2-->',co2Marks)
        // console.log(studentList[key].cidatyperoll,'-> co3-->',co3Marks)
        // console.log(studentList[key].cidatyperoll,'-> co4-->',co4Marks)
        // console.log(studentList[key].cidatyperoll,'-> co5-->',co5Marks)
        // console.log(studentList[key].cidatyperoll,'-> co6-->',co6Marks)
        
    }


    // course outcomes calculated!
    countOfCo1= countOfCo1/studentList.length*100;
    countOfCo2= countOfCo2/studentList.length*100;
    countOfCo3 = countOfCo3/studentList.length*100;
    countOfCo4= countOfCo4/studentList.length*100;
    countOfCo5= countOfCo5/studentList.length*100;
    countOfCo6 = countOfCo6/studentList.length*100;
    console.log(countOfCo1,countOfCo2,countOfCo3,countOfCo4,countOfCo5,countOfCo6,studentList.length)

    // const a = await copercentage.create({
    //    batchidcidatype: batchidcidatype,co1:countOfCo1,ccountOfCo2,countOfCo3,countOfCo4,countOfCo5,countOfCo6})
   const a = await new copercentage({
    batchidcidatype : batchidcidatype,
    co1: countOfCo1,
    co2 : countOfCo2,
    co3: countOfCo3,
    co4: countOfCo4,
    co5: countOfCo5,
    co6: countOfCo6
   })
   await a.save();
       if(a){
        console.log('co percentage stored')
    }
    console.log('co percentage done')

}
  
const coPercentageOfStudentsEndSem = async(studentList,coqp,cot,batchidcidatype) => {
    //  console.log(typeof(cot))
    // console.log(cot.co1Marks)
// if(cot[0].co1Marks=='1.2')
//     console.log(true)
    var cot1= cot.co1Marks;
    var cot2=cot.co2Marks
    var cot3 = cot.co3Marks;
    var cot4 = cot.co4Marks
    var cot5 = cot.co5Marks
    var cot6 = cot.co6Marks
    
    var co1q = coqp.co1q;
    var co2q = coqp.co2q, co3q = coqp.co3q;
    var co4q = coqp.co4q;
    var co5q = coqp.co5q;
    var co6q = coqp.co6q;

    var countOfCo1 = 0,countOfCo2 =0,countOfCo3=0,countOfCo4=0,countOfCo5=0,countOfCo6=0;

    for(let key in studentList){
        co1Marks=0;
        for(let i in co1q){
            if(co1q[i]=="Nil"){
                break;
            }
            else if(co1q[i]=='1'){
                co1Marks+=parseFloat(studentList[key].q1);
            }else if(co1q[i]=='2'){
                co1Marks+=parseFloat(studentList[key].q2);
            }else if(co1q[i]=='3'){
                co1Marks+=parseFloat(studentList[key].q3);
            }else if(co1q[i]=='4'){
                co1Marks+=parseFloat(studentList[key].q4);
            }else if(co1q[i]=='5'){
                co1Marks+=parseFloat(studentList[key].q5);
            }else if(co1q[i]=='6'){
                co1Marks+=parseFloat(studentList[key].q6);
            }else if(co1q[i]=='7'){
                co1Marks+=parseFloat(studentList[key].q7);
            }else if(co1q[i]=='8'){
                co1Marks+=parseFloat(studentList[key].q8);
            }else if(co1q[i]=='9'){
                co1Marks+=parseFloat(studentList[key].q9);
            }else if(co1q[i]=='10'){
                co1Marks+=parseFloat(studentList[key].q10);
            }
            else if(co1q[i]=='11'){
                co1Marks+=parseFloat(studentList[key].q11);
            }
            else if(co1q[i]=='12'){
                co1Marks+=parseFloat(studentList[key].q12);
            }
            else if(co1q[i]=='13'){
                co1Marks+=parseFloat(studentList[key].q13);
            }
            else if(co1q[i]=='14'){
                co1Marks+=parseFloat(studentList[key].q14);
            }
            else if(co1q[i]=='15'){
                co1Marks+=parseFloat(studentList[key].q15);
            }
            else if(co1q[i]=='16'){
                co1Marks+=parseFloat(studentList[key].q16);
            }
        }
        if(co1Marks > cot1){
            countOfCo1++;
        }

        //co2
        co2Marks=0;
        for(let i in co2q){
            if(co2q[i]=="Nil"){
                break;
            }
            else if(co2q[i]=='1'){
                co2Marks+=parseFloat(studentList[key].q1);
               
            }else if(co2q[i]=='2'){
                co2Marks+=parseFloat(studentList[key].q2);
            }else if(co2q[i]=='3'){
                co2Marks+=parseFloat(studentList[key].q3);
            }else if(co2q[i]=='4'){
                co2Marks+=parseFloat(studentList[key].q4);
            }else if(co2q[i]=='5'){
                co2Marks+=parseFloat(studentList[key].q5);
            }else if(co2q[i]=='6'){
                co2Marks+=parseFloat(studentList[key].q6);
            }else if(co2q[i]=='7'){
                co2Marks+=parseFloat(studentList[key].q7);
            }else if(co2q[i]=='8'){
                co2Marks+=parseFloat(studentList[key].q8);
            }else if(co2q[i]=='9'){
                co2Marks+=parseFloat(studentList[key].q9);
            }else if(co2q[i]=='10'){
                co2Marks+=parseFloat(studentList[key].q10);
            }
            else if(co2q[i]=='11'){
                co2Marks+=parseFloat(studentList[key].q11);
            }
            else if(co2q[i]=='12'){
                co2Marks+=parseFloat(studentList[key].q12);
            }
            else if(co2q[i]=='13'){
                co2Marks+=parseFloat(studentList[key].q13);
            }
            else if(co2q[i]=='14'){
                co2Marks+=parseFloat(studentList[key].q14);
            }
            else if(co2q[i]=='15'){
                co2Marks+=parseFloat(studentList[key].q15);
            }
            else if(co2q[i]=='16'){
                co2Marks+=parseFloat(studentList[key].q16);
            }

        }
        if(co2Marks > cot2){
            countOfCo2++;
        }

        //co3
        co3Marks=0;
        for(let i in co3q){
            if(co3q[i]=="Nil"){
                break;
            }
            else if(co3q[i]=='1'){
                co3Marks+=parseFloat(studentList[key].q1);
               
            }else if(co3q[i]=='2'){
                co3Marks+=parseFloat(studentList[key].q2);
            }else if(co3q[i]=='3'){
                co3Marks+=parseFloat(studentList[key].q3);
            }else if(co3q[i]=='4'){
                co3Marks+=parseFloat(studentList[key].q4);
            }else if(co3q[i]=='5'){
                co3Marks+=parseFloat(studentList[key].q5);
            }else if(co3q[i]=='6'){
                co3Marks+=parseFloat(studentList[key].q6);
            }else if(co3q[i]=='7'){
                co3Marks+=parseFloat(studentList[key].q7);
            }else if(co3q[i]=='8'){
                co3Marks+=parseFloat(studentList[key].q8);
            }else if(co3q[i]=='9'){
                co3Marks+=parseFloat(studentList[key].q9);
            }
            else if(co3q[i]=='10'){
                co3Marks+=parseFloat(studentList[key].q10);
            }
            else if(co3q[i]=='11'){
                co3Marks+=parseFloat(studentList[key].q11);
            }
            else if(co3q[i]=='12'){
                co3Marks+=parseFloat(studentList[key].q12);
            }
            else if(co3q[i]=='13'){
                co3Marks+=parseFloat(studentList[key].q13);
            }
            else if(co3q[i]=='14'){
                co3Marks+=parseFloat(studentList[key].q14);
            }
            else if(co3q[i]=='15'){
                co3Marks+=parseFloat(studentList[key].q15);
            }
            else if(co3q[i]=='16'){
                co3Marks+=parseFloat(studentList[key].q16);
            }
        }
        if(co3Marks > cot3){
            countOfCo3++;
        }

        //co4
        co4Marks=0;
        for(let i in co4q){
            if(co4q[i]=="Nil"){
                break;
            }
            else if(co4q[i]=='1'){
                co4Marks+=parseFloat(studentList[key].q1);
               
            }else if(co4q[i]=='2'){
                co4Marks+=parseFloat(studentList[key].q2);
            }else if(co4q[i]=='3'){
                co4Marks+=parseFloat(studentList[key].q3);
            }else if(co4q[i]=='4'){
                co4Marks+=parseFloat(studentList[key].q4);
            }else if(co4q[i]=='5'){
                co4Marks+=parseFloat(studentList[key].q5);
            }else if(co4q[i]=='6'){
                co4Marks+=parseFloat(studentList[key].q6);
            }else if(co4q[i]=='7'){
                co4Marks+=parseFloat(studentList[key].q7);
            }else if(co4q[i]=='8'){
                co4Marks+=parseFloat(studentList[key].q8);
            }else if(co4q[i]=='9'){
                co4Marks+=parseFloat(studentList[key].q9);
            }else if(co4q[i]=='10'){
                co4Marks+=parseFloat(studentList[key].q10);
            }
            else if(co4q[i]=='11'){
                co4Marks+=parseFloat(studentList[key].q11);
            }else if(co4q[i]=='12'){
                co4Marks+=parseFloat(studentList[key].q12);
            }
            else if(co4q[i]=='13'){
                co4Marks+=parseFloat(studentList[key].q13);
            }
            else if(co4q[i]=='14'){
                co4Marks+=parseFloat(studentList[key].q14);
            }
            else if(co4q[i]=='15'){
                co4Marks+=parseFloat(studentList[key].q15);
            }
            else if(co4q[i]=='16'){
                co4Marks+=parseFloat(studentList[key].q16);
            }
            
            
        }
        if(co4Marks > cot4){
            countOfCo4++;
        }

        //co5
        co5Marks=0;
        for(let i in co5q){
            if(co5q[i]=="Nil"){
                break;
            }
            else if(co5q[i]=='1'){
                co5Marks+=parseFloat(studentList[key].q1);
               
            }else if(co5q[i]=='2'){
                co5Marks+=parseFloat(studentList[key].q2);
            }else if(co5q[i]=='3'){
                co5Marks+=parseFloat(studentList[key].q3);
            }else if(co5q[i]=='4'){
                co5Marks+=parseFloat(studentList[key].q4);
            }else if(co5q[i]=='5'){
                co5Marks+=parseFloat(studentList[key].q5);
            }else if(co5q[i]=='6'){
                co5Marks+=parseFloat(studentList[key].q6);
            }else if(co5q[i]=='7'){
                co5Marks+=parseFloat(studentList[key].q7);
            }else if(co5q[i]=='8'){
                co5Marks+=parseFloat(studentList[key].q8);
            }else if(co5q[i]=='9'){
                co5Marks+=parseFloat(studentList[key].q9);
            }else if(co5q[i]=='10'){
                co5Marks+=parseFloat(studentList[key].q10);
            }
            else if(co5q[i]=='11'){
                co5Marks+=parseFloat(studentList[key].q11);
            }
            else if(co5q[i]=='12'){
                co5Marks+=parseFloat(studentList[key].q12);
            }
            else if(co5q[i]=='13'){
                co5Marks+=parseFloat(studentList[key].q13);
            }
            else if(co5q[i]=='14'){
                co5Marks+=parseFloat(studentList[key].q14);
            }
            else if(co5q[i]=='15'){
                co5Marks+=parseFloat(studentList[key].q15);
            }
            else if(co5q[i]=='16'){
                co5Marks+=parseFloat(studentList[key].q16);
            }
        }
        if(co5Marks > cot5){
            countOfCo5++;
        }


        //co6
        co6Marks=0;
        for(let i in co6q){
            if(co6q[i]=="Nil"){
                break;
            }
            else if(co6q[i]=='1'){
                co6Marks+=parseFloat(studentList[key].q1);
               
            }else if(co6q[i]=='2'){
                co6Marks+=parseFloat(studentList[key].q2);
            }else if(co6q[i]=='3'){
                co6Marks+=parseFloat(studentList[key].q3);
            }else if(co6q[i]=='4'){
                co6Marks+=parseFloat(studentList[key].q4);
            }else if(co6q[i]=='5'){
                co6Marks+=parseFloat(studentList[key].q5);
            }else if(co6q[i]=='6'){
                co6Marks+=parseFloat(studentList[key].q6);
            }else if(co6q[i]=='7'){
                co6Marks+=parseFloat(studentList[key].q7);
            }else if(co6q[i]=='8'){
                co6Marks+=parseFloat(studentList[key].q8);
            }else if(co6q[i]=='9'){
                co6Marks+=parseFloat(studentList[key].q9);
            }else if(co6q[i]=='10'){
                co6Marks+=parseFloat(studentList[key].q10);
            }
            else if(co6q[i]=='11'){
                co6Marks+=parseFloat(studentList[key].q11);
            }
            else if(co6q[i]=='12'){
                co6Marks+=parseFloat(studentList[key].q12);
            }
            else if(co6q[i]=='13'){
                co6Marks+=parseFloat(studentList[key].q13);
            }
            else if(co6q[i]=='14'){
                co6Marks+=parseFloat(studentList[key].q14);
            }
            else if(co6q[i]=='15'){
                co6Marks+=parseFloat(studentList[key].q15);
            }
            else if(co6q[i]=='16'){
                co6Marks+=parseFloat(studentList[key].q16);
            }
        }
        if(co6Marks > cot6){
            countOfCo6++;
        }

        // console.log(studentList[key].cidatyperoll,'-> co1-->',co1Marks)
        // console.log(studentList[key].cidatyperoll,'-> co2-->',co2Marks)
        // console.log(studentList[key].cidatyperoll,'-> co3-->',co3Marks)
        // console.log(studentList[key].cidatyperoll,'-> co4-->',co4Marks)
        // console.log(studentList[key].cidatyperoll,'-> co5-->',co5Marks)
        // console.log(studentList[key].cidatyperoll,'-> co6-->',co6Marks)
        
    }


    // course outcomes calculated!
    countOfCo1= countOfCo1/studentList.length*100;
    countOfCo2= countOfCo2/studentList.length*100;
    countOfCo3 = countOfCo3/studentList.length*100;
    countOfCo4= countOfCo4/studentList.length*100;
    countOfCo5= countOfCo5/studentList.length*100;
    countOfCo6 = countOfCo6/studentList.length*100;
    console.log(countOfCo1,countOfCo2,countOfCo3,countOfCo4,countOfCo5,countOfCo6,studentList.length)

    // const a = await copercentage.create({
    //    batchidcidatype: batchidcidatype,co1:countOfCo1,ccountOfCo2,countOfCo3,countOfCo4,countOfCo5,countOfCo6})
   const a = await new copercentage({
    batchidcidatype : batchidcidatype,
    co1: countOfCo1,
    co2 : countOfCo2,
    co3: countOfCo3,
    co4: countOfCo4,
    co5: countOfCo5,
    co6: countOfCo6
   })
   await a.save();
       if(a){
        console.log('co percentage stored')
    }
    console.log('co percentage done')

}

const calculateCo = asyncHandler( async( req, res) => {
    //regex for searching co-q mapping
    const{ batchidcidatype, target} = req.body;
    const regex = new RegExp('^'+ batchidcidatype)
    //to find if for the given batchidcidatype 
    const bidcidExists = await coqpMapping.findOne({batchidcidatype})
    if(!bidcidExists){
        res.send('No such question paper is uploaded')
        console.log('No such question paper is uploaded')
    }
    
//regex = batchidcidatype: Mcass-20-22-DeepLearning-1   
    

    //calculating cot based on marks, first line :)

    // const a= await coqpMapping.find({batchidcidatype : batchidcidatype})
    // res.send('done')
    // console.log(a)

   else{
    const result = await coqpMapping.aggregate([
        {
            $match : {
                batchidcidatype : batchidcidatype
            }
        },
        {
            $group : {
                _id: null,
                co1q : { $push : "$co1q"},
                co2q : { $push : "$co2q"},
                co3q : { $push : "$co3q"},
                co4q : { $push : "$co4q"},
                co5q : { $push : "$co5q"},
                co6q : { $push : "$co6q"},  
                
            }
        }
    ])
    .then(result => {
        if(batchidcidatype[batchidcidatype.length-1]=='e'){
            console.log('yes')
            cotEndSem(result[0].co1q.flat(),result[0].co2q.flat(),
            result[0].co3q.flat(),result[0].co4q.flat(),result[0].co5q.flat(),result[0].co6q.flat(),target,batchidcidatype)
        }
        else{
        cotBasedOnMarksCalculator(result[0].co1q.flat(),result[0].co2q.flat(),
            result[0].co3q.flat(),result[0].co4q.flat(),result[0].co5q.flat(),result[0].co6q.flat(),target,batchidcidatype) 
        }
    })
    .catch(err => {
        console.log(err)
    })
    res.send('sami kadavule, cot based on marks calculated') 
}
    

})

const addAssessMarks = asyncHandler( async(req, res) => {
    const{documents} = req.body;
    console.log(documents)
    for( var i in documents){
        mark = await new assessMarksModel(
            documents[i]
        )
        await mark.save()
        console.log(i,'->',documents[i])
    }
    res.send('assess marks stored')
})

const addEndSemMarks = asyncHandler( async(req, res) => {
    const{documents} = req.body;
    console.log(documents)
    for( var i in documents){
        mark = await new endSemMarksModel(
            documents[i]
        )
        await mark.save()
        console.log(i,'->',documents[i])
    }
    res.send('end sem marks stored')
})


const calculateCoPercentage = asyncHandler( async(req, res) => {
    const{ batchidcidatype} = req.body;
   const regex = new RegExp('^'+ batchidcidatype)
// finding student marks with given regex
    // const studentmarks = await assessMarksModel.find({cidatyperoll: regex})
   const coqp = await coqpMapping.findOne({ batchidcidatype})
   const cot = await cotBasedOnMarksModel.findOne({ batchidcidatype})
    console.log('cot',cot)  
    console.log('coqp',coqp) 
    if(batchidcidatype[batchidcidatype.length-1]=='e'){
        console.log('ama')
        const result = await endSemMarksModel.aggregate([
            {
                $match:{    
                    cidatyperoll : regex
                }
            },    
        ]).then(result => {
         // console.log(result)
         if(coqp && cot){
            console.log('heyy its valid')
            coPercentageOfStudentsEndSem(result,coqp,cot,batchidcidatype)
         }  
         else{
            console.log('no da thangam')
         }
        })
    }
    else{
        const result = await assessMarksModel.aggregate([
            {
                $match:{    
                    cidatyperoll : regex
                }
            },    
        ]).then(result => {
         // console.log(result)
         if(coqp && cot){
            console.log('heyy its valid')
            coPercentageOfStudents(result,coqp,cot,batchidcidatype)
         }  
         else{
            console.log('no da thangam')
         }
        })
    }
    // const result = await assessMarksModel.aggregate([
    //     {
    //         $match:{    
    //             cidatyperoll : regex
    //         }
    //     },    
    // ]).then(result => {
    //  // console.log(result)
    //  if(coqp && cot){
    //     console.log('heyy its valid')
    //     coPercentageOfStudents(result,coqp,cot,batchidcidatype)
    //  }  
    //  else{
    //     console.log('no da thangam')
    //  }
    // })
        // console.log(studentmarks)
  res.send('sami kadavule kapathu, co percentage calculated')

});


const getCO =async(req, res)=>{  
    const{batchidcidatype} = req.body;
    // working code
    const a = await cotBasedOnMarksModel.findOne({batchidcidatype: batchidcidatype});
    if(a){
        res.json(a)
        console.log('Found cot based on marks')
    }
    else{
        res.send('no cotarget')  
        console.log('NOoo bro cot')  
    }  
      
}

const getCOPercentage =async(req, res)=>{  
    const{batchidcidatype} = req.body;
    // working code
    const a = await copercentage.findOne({batchidcidatype: batchidcidatype});
    if(a){ 
        res.json(a)
        console.log('Found co% ')  
    }
    else{
        res.send('no co percentage')
        console.log('NOoo bro co%')
    }             
}         

// to check if copercent is for 1,2,e
const checkForOA = asyncHandler( async(req,res) => {
    const{ batchidcid } = req.body;
    const regex = new RegExp('^'+ batchidcid)
     
    try {
    const count = await copercentage.countDocuments({
      batchidcidatype: {
        $regex: regex
      }
    });

    console.log('Number of matching fields:', count);
    res.status(200).send(`Number of matching docs: ${count}`);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('An error occurred');
  }
})

const calculateOA = asyncHandler( async(req, res) => {
    const{ batchidcid } = req.body;
    var assess1 = await copercentage.findOne({batchidcidatype : batchidcid+'1'})
    var assess2 = await copercentage.findOne({batchidcidatype : batchidcid+'2'})
    var endsem = await copercentage.findOne({batchidcidatype : batchidcid+'e'})
    
    var assess1co = []
    assess1co.push(parseFloat(assess1.co1))
    assess1co.push(parseFloat(assess1.co2))
    assess1co.push(parseFloat(assess1.co3))
    assess1co.push(parseFloat(assess1.co4))
    assess1co.push(parseFloat(assess1.co5))
    assess1co.push(parseFloat(assess1.co6))

    var assess2co = []
    assess2co.push(parseFloat(assess2.co1))
    assess2co.push(parseFloat(assess2.co2))
    assess2co.push(parseFloat(assess2.co3))
    assess2co.push(parseFloat(assess2.co4))
    assess2co.push(parseFloat(assess2.co5))
    assess2co.push(parseFloat(assess2.co6))

    var endsemco = []
    endsemco.push(parseFloat(endsem.co1))
    endsemco.push(parseFloat(endsem.co2))
    endsemco.push(parseFloat(endsem.co3))
    endsemco.push(parseFloat(endsem.co4))
    endsemco.push(parseFloat(endsem.co5))
    endsemco.push(parseFloat(endsem.co6))

    var ass1lev = [], ass2lev = [], endsemlev = []
    //converting it to levels
    for(let i in assess1co){
        let val = assess1co[i]
        if(val == 0){
            ass1lev[i]=0;
        }
        else if(val <= 20){
            ass1lev[i]=1
        }
        else if(val >=21 && val <=40){
            ass1lev[i]= 1.5
        }
        else if(val >=41 && val <=60){
            ass1lev[i] = 2;
        }
        else if(val >= 61 && val<=80){
            ass1lev[i]= 2.5;
        }
        else{
            ass1lev[i]=3;
        }
    }
    
    console.log(ass1lev)
    
    for(let i in assess2co){
        let val = assess2co[i]
        if(val == 0){
            ass2lev[i] = 0;
        }
        else if(val <= 20){
            ass2lev[i]=1
        }
        else if(val >=21 && val <=40){
            ass2lev[i]= 1.5
        }
        else if(val >=41 && val <=60){
            ass2lev[i] = 2;
        }
        else if(val >= 61 && val<=80){
            ass2lev[i]= 2.5;
        }
        else{
            ass2lev[i]=3;
        }

    }
    for(let i in endsemco){
        let val = endsemco[i]
        if(val == 0){
            endsemlev[i] = 0;
        }
        else if(val <= 20){
            endsemlev[i]=1
        }
        else if(val >=21 && val <=40){
            endsemlev[i]= 1.5
        }
        else if(val >=41 && val <=60){
            endsemlev[i] = 2;
        }
        else if(val >= 61 && val<=80){
            endsemlev[i]= 2.5;
        }
        else{
            endsemlev[i]=3;
        }

    }
// generating oa
var oa = []
for(let i=0 ;i< 6 ;i++){
    oa[i] = parseFloat(( (ass1lev[i]+ass2lev[i])/2+endsemlev[i] )/2);

}
console.log(oa)
//     var ass1co1= parseFloat(assess1.co1)
//     var ass1co2 = parseFloat(assess1.co2),
//     ass1co3 = parseFloat(assess1.co3),ass1co4 = parseFloat(assess1.co4),
//     ass1co5 = parseFloat(assess1.co5),ass1co6 = parseFloat(assess1.co6);
    
//     console.log('ass1co1',ass1co1)

//     var ass2co1= parseFloat(assess2.co1), ass2co2 = parseFloat(assess2.co2),
//     ass2co3 = parseFloat(assess2.co3),ass2co4 = parseFloat(assess2.co4),
//     ass2co5 = parseFloat(assess2.co5),ass2co6 = parseFloat(assess2.co6);

//    // console.log('ass2co1',ass2co1)
//     var semco1 = parseFloat(endsem.co1),semco2 = parseFloat(endsem.co2),
//     semco3 = parseFloat(endsem.co3),semco4 = parseFloat(endsem.co4),
//     semco5 = parseFloat(endsem.co5),semco6 = parseFloat(endsem.co6);

//    // console.log('semco1',semco1)
//    // console.log('oaco1',( (ass1co1+ass2co1)/2+semco1)/2)
//     var oa=[];
//     oa.push(( (ass1co1+ass2co1)/2+semco1)/2)
//     oa.push(( (ass1co2+ass2co2)/2+semco2)/2)
//     oa.push(( (ass1co2+ass2co2)/2+semco2)/2)
//     oa.push(( (ass1co4+ass2co4)/2+semco4)/2)
//     oa.push( ( (ass1co5+ass2co5)/2+semco5)/2)
//     oa.push(( (ass1co6+ass2co6)/2+semco6)/2)
   
   var extractedString='';
var result =await batchidcid.match(/\d+([^\d]*)$/);
if (result && result.length > 1) {
    extractedString = result[1];
 console.log(extractedString)
  } else {
    console.log('No match found');
  }
extractedString = extractedString.replace(' ','')
extractedString = extractedString.replace(' ','')

console.log('ext',extractedString)
  const a = 'EthicalHacking'; // Regex pattern to match keys starting with 'EthicalHacking'
const k = new RegExp('^'+ extractedString)
  const pipeline = [
    {
      $project: {
        matchedValues: {
          $objectToArray: '$$ROOT',
        },
      },
    },
    {
      $unwind: '$matchedValues',
    },
    {
      $match: {
        'matchedValues.k': {
          $regex: k,
        },
      },
    },
    {
      $group: {
        _id: null,
        values: {
          $push: '$matchedValues.v',
        },
      },
    },
    {
      $project: {
        _id: 0,
        values: 1,
      },
    },
  ];

  const resul = await copoMapping.aggregate(pipeline);
var arrdata = resul[0].values;
// res.send('ok')
 // res.json(resul[0].values);
console.log(arrdata)

    

   console.log('***********************')
   console.log(oa)
    var poa = []
   for(let j = 0;j< 10;j++){
    let sum = 0,sumOfcpij=0;
    for(let i = 0 ;i<6;i++){
       // console.log(arrdata[i][j])
        if(arrdata[i][j] == '-')
            continue;
        sumOfcpij+=parseFloat(arrdata[i][j])
        sum+= parseFloat(oa[i]*arrdata[i][j])
        
    }
    //console.log(sum,sumOfcpij)
    if(sumOfcpij==0){
        poa.push(0)
    }
    else{
 poa.push((sum/sumOfcpij).toFixed(2))
    }
   
    //console.log('_____________')
   }
    console.log(poa)
   
// res.send('done')
res.json(poa);
})

const checkIfMarksEntered = asyncHandler( async( req, res) => {
    const{ cidatyperoll}= req.body;
    const regex = new RegExp('^'+ cidatyperoll);
    console.log(regex)
    let a='none';
   const result =  await assessMarksModel.aggregate([
    {
        $match : {
            cidatyperoll : regex
        }
    }
   ])
   if(result.length){
    res.status(200).send('Present')
   }
   else{
    res.status(200).send('Not present')
   }
})

module.exports = {addCoQpMapping, calculateCo, addAssessMarks, addEndSemMarks, calculateCoPercentage, 
    getCO,getCOPercentage, checkForOA, calculateOA, checkIfMarksEntered}