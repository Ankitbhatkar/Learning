// const user ={
//     username:"ankit",
//     logincount :8,
//     stgnedIn:true,

//     getUserDetails: function(){
        // console.log("got user details form database");
        // console.log(`username:${this.username}`);
        // console.log(this);
        
        
        
    // }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




//contructor function  (new)
function user(username,logincount,isLoggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn


    this.gritting=function(){
        console.log(`Welcome ${this.username}`);
        
    }//becoase  of new not run
    // return  this
}
// const userOne=user("ankit",8,true)                     const userOne= new user("ankit",8,true)
// const userTwo=user("codeCrafter",12,false)             const userTwo= new user("codeCrafter",12,false)

console.log(userOne.construct);//becoase  of new not run
console.log(userTwo);




// instanceof

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  

