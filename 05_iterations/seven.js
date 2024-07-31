let mynum=[1,2,3,4,5,6,7,8,9,10];

// let new_num= mynum.map((element)=> element+10 )
// console.log(new_num);

// let new_num= mynum.map((element)=> {return element+10} )
// console.log(new_num);

//try with for each
//  let new_num=[]
//  mynum.forEach((element)=>{
//     new_num.push(element+10);
//  } )
// console.log(new_num);


let new_num= mynum.map((item)=> item*10 )
                 .map((item)=> item+1)
                 .filter((item)=>item>=40)
console.log(new_num);
