
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//===============================lest learn about the heap and stack memory====================================
//  ////////// STACK=(PRIMTIVES) 

let my_companyname = "flipcart"
 let anotherscompany =my_companyname;
 console.log(my_companyname);
//  console.log(anotherscompany);
    anotherscompany="amazon";
   console.log(anotherscompany);
    //this value of anotherscompany 
    //  NOT change FIRST ASSIGMENT and THI CHANGE IS FORM AT COPED VERSION because the Stack memory 
//  //////////HEAP=(NON PRIMITIVES)

let USER1={
    email:"ankit@gmail.come";
    upi:"ankitokaksis"
}
console.log(USER1);
