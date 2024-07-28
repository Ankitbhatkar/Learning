// immediately Invoked function expression(IIFE)

// SYNTAX:(FUNCTION)();

//THIS METHOD IS USE AVOIDE THE POLUTION OF GLOBLE SCOPE

(function chai () {
    //namedIIFE
    console.log(`DB connected`);
})(); //MUST;

(  (name)=> {
    console.log(`DB connected ${name}`);
})("ankit"); //MUST;
