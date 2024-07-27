function myName() {
console.log("a");
console.log("n");
console.log("k");
console.log("i");
console.log("t");
    
}
// myName()


//  function calcu(number1,number2) {
//     console.log(number1+number2);
    
//  }
//  const result = calcu(2,4);

//  console.log("resuit is :",result);
                                        //focus the we are try to 
                                        // give the value to result variable
                                        // but the function just is console not return any value
    //righ way
    function calcu(number1,number2) {
        const result = number1+number2;
        return result
                                            //  after return keyword nothing execute
          }
         const result = calcu(2,4)
        //   console.log("resuit is :",result);



        function userloginMassage(username){
            if (username=== undefined) {   //we can use !username as condition
                console.log("please enter the userme");
                return
            }
            return `${username} just loggined`;
        }
console.log(userloginMassage("ankit"));





