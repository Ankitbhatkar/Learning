
//scope 
var c=300
let a=2220;
if (true) {
    let a=10;
    const b=20;
    var c=30;
    // console.log(`inner a`,a);
    }
    // console.log(a);
    // console.log(b);
    // console.log(c);


//nested scope

function one() {
    const username ="ankit";
    function two() {
          const website="youtube";
        console.log(username);
        
    }
    // console.log(website);
   two()

}
// one()
if (true) {
    const username ="ankit";
        if(username==="ankit"){
            const website="youtube";
            // console.log(username+website);
        }
        // console.log(website);
    }
    // console.log(username);

 //+++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++
 addone(5)
function addone(value) {
    return value+1;
    
}
addtwo(2)
const addtwo =function (value) {
    return value+2;
    
}





