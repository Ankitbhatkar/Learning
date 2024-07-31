 const coding=["java","python","javascript","c"]

//   const myLanguage= coding.forEach( (elements)=>{
//     //console.log(elements)                           
//      return elements    //the forEach function do not return any thing
// })

// console.log(myLanguage)  //itersting

// filter

let mynum=[1,2,3,4,5,6,7,8,9,10];

//let newnum= mynum.filter((item)=>(item>=4))
// console.log(newnum);

// let newnum= mynum.filter((item)=>
    // {
        // return item>=4             //another way to writte
//     })
// console.log(newnum);


//  let newarr=[];
//  mynum.forEach((item)=>{
//     if (item>=4) {
//         newarr.push(item);      //using forEach loop
//     }
  
//  })
//  console.log(newarr);


//+++++++++++++++++++++++++++++++++++++++++++++++practice filter




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


 let  userbook= books.filter((bk)=>(bk.genre==="History" && bk.edition>2000))
 console.log(userbook);
 
  userbook= books.filter((bk)=>{ return bk.publish>2000})
 console.log(userbook);

