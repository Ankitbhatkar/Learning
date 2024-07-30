//for of

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(`index is ${num} and contain ${arr[num]}`)
    
// }
// for (const num of arr) {
    // console.log(`index is ${num} `)
    
// }
// for (const num of arr) {
//     console.log(` contain ${arr}`)
    
// }

//  const greeting = "hallo world"
// for (const greet of greeting) {
//     console.log(` each char is ${greet}`)
    
// }

// map

const map =new Map()   //map is stucturre that store key ,value pair 
                        //in which we can not store dublicate value
map.set('IN','INDIA')
map.set('USA','UNAITED STATES OF AMERICA')
map.set('FR','FRANCE')

// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ":-" ,value);
}

// const myObject={             //not possible that objects are iterate 
//                              //whith the help of "for of loop"
//    game1:"gta",
//     game2:"gow"
// }
// for (const [key,value]of myObject) {
//     console.log(key,":-", value);
// }

