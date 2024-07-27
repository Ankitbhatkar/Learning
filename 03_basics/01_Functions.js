

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
            const cal = number1+number2;
            return cal
                                                //  after return keyword nothing execute
              }
             const result = calcu(2,4)
              console.log("result is :",result);
    
    
            function userloginMassage(username){
                if (username=== undefined) {   //we can use !username as condition
                    console.log("please enter the userme");
                    return
                }
                return `${username} just loggined`;
            }
    // console.log(userloginMassage("ankit"));
    
    
    function  calculateCartPrice(...num){
        return num;
    }
    // console.log(calculateCartPrice(2,3,99,7999))
    
    
    const user={
        username:"ankit",
        price:1999
    }
    function handleObject(anyObject){
        return `user ${anyObject.username} bill is ${anyObject.price}`
    }
    // console.log( handleObject(user))
    // console.log( handleObject({
    //     username:"raju",
    //     price:99
    // }))
    const mynewArray =[123,200,3000]
    function raturnsecondValue(getArrey) {
        return getArrey[1]
    }
    // console.log(raturnsecondValue(mynewArray) );
    console.log(raturnsecondValue([123,200,3000]) );
    
   