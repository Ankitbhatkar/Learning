// for
// for (let index = 0; index <=10; index++) {
//     const element = index;
//      console.log(element);
    
// }


// for (let i = 0; i <=10; i++) {
//     if (i==5) {
//         // console.log(`5 is find ${i}`);
//     }
    
//     // console.log(i);
    
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop value ${i}`);
//         console.log(` ${i} * ${j} = ${i*j}`);
      
//     }
    
// }
let myarr=["batman","spiderman","ironman","superman"]
// console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    
}

//breck  & continue
for (let i = 0; i <=10; i++) {
        if (i==5) {
            // console.log(`5 is find ${i}`);
            break;
        }
        
        // console.log(i);
        
    }



    for (let i = 0; i <=10; i++) {
        if (i==5) {
            // console.log(`5 is find ${i}`);
           continue;    //ek galti maf
           
        }
        
        // console.log(i);
        
    }
