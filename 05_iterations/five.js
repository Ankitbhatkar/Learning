const myarr=['js','javs','python','cpp'];
// myarr.forEach( function (item){
//     console.log(item);
// });


// myarr.forEach( (item)=>{
//     console.log(item);
// });



// function greet(item){
//     console.log(item);}
// myarr.forEach( greet);


// myarr.forEach( (item,index,myarr)=>{
//     console.log(item,index,myarr);
// });

// myarr.forEach( (,index,myarr)=>{       //error
//     console.log(,index,myarr);
// });

const myarr2 =[
    {
        languageName:"java",
        extentionName:"java"
    },
    {
        languageName:"javascript",
        extentionName:"js"
    },
    {
        languageName:"pyton",
        extentionName:"py"
    },
    {
        languageName:"c",
        extentionName:"c"
    }
]

myarr2.forEach( (item)=>{
        console.log(item.languageName);
    });
    