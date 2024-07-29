const useremail="ankit@123.gmail"
if (useremail) {
    console.log("Gote user email");
    }
    else{
        console.log("don't have user email");

    }
    //falsy
    //false,0,"",-0,Bigint 0n,null,undefind,NaN
    
    //truthy
    // "0",'false'," ",[],{},function(){}
    
    
    
    // const userEmail=[];
    // if (userEmail.length === 0) {
    //    console.log("array is empty"); 
    // }

    // const emptyObject ={}
    // if(Object.keys(emptyObject).length===0){
    //     console.log("object is empty");
    // }


    // Nallish Coalescing Operator(??) :null undefined
    
    
    // let val1;
    // val1= 5 ?? 10
    // val1 = null ?? 10
    // val1 = undefined ?? 15
    // val1 = null ?? 10 ??20
    // console.log(val1);


//   Terniary Operator 
// condition ? true :false 
let iceTea=100;
iceTea<=80 ? console.log("less than 80"):console.log("more than 80")
