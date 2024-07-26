//singleton
//Object.ton

//Objectsliterals

const mySym = Symbol("key1")
 const user ={
    name:"ankit",
    "full name":"ankit pradip bhatkar",
    age:18,
    email:"ankit@google.com",
   [mySym]:"mykey",
    isLoggedIn:false,
    LogingDay:["mon","tue","sat"]
 }


console.log( user.email);


// console.log( user["email"]);//good way to access object element
// console.log( user["full name"]);


//  user.email="akit.microsoft.com";
//  console.log(user["email"]);


//  console.log(user["mySym"]);
//  console.log(typeof user["mySym"]);

// Object.freeze(user);
// user.email="akit.chatgpt.com";
// console.log(user["email"]);

user.greeting= function(){
    console.log("hello user");
 }

 console.log( user.greeting()); //comment the above  line31 if it is freeze

 
user.greetingTwo= function(){
    console.log(`hello user${this.name}`);
    
 }
 console.log( user.greetingTwo()); 

