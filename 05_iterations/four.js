

const myObject ={
  
    "java":"java",
     "js":"javascript",
     "py":"pyton",
}
for (const key in myObject) {
// console.log(`${key} value is ${ myObject[key] }`);
}
const myarr=['js','javs','python','cpp']
for (const key in myarr) {
    // console.log(`${key} value is ${ myarr[key] }`);
    }


    const map =new Map()   //map is stucturre that store key ,value pair 
                        //in which we can not store dublicate value
map.set('IN','INDIA')
map.set('USA','UNAITED STATES OF AMERICA')
map.set('FR','FRANCE')

for (const key in map) {             //not possible that Map are iterate 
                                        //whith the help of "for in loop"
   console.log(key); 
}