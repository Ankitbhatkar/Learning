 const promiseOne= new Promise(
 function (resolve,reject){
    //Do an async task
    //DB call,cryptography,network
    setTimeout(function(){
        console.log('asynck task is complite');
        resolve()
        
    },1000)
 })
 promiseOne.then(function(){
    console.log("promise is comlplit");
    
 }) 
 

 new Promise(function(resolve,reject){
    setTimeout( function(){
        console.log("async task 2");
        resolve();
    },1000)
 }).then(function(){
    console.log("promise 2 is comlplit")
 })




 //data pass by resolve
 const promiseTwo= new Promise(
    function (resolve,reject){
       
       setTimeout(function(){
           
           resolve({username:"ankit",email:"anki@gmail.com"})
           
        },1000)
    })

    promiseTwo.then(function(user){
        console.log(user);
        
    })

    //
    const promiseFour= new Promise(
        function (resolve,reject){
           
           setTimeout(function(){
            let error=true;//false
            if (!error) {
                resolve({userid:"codecrafter",pass:"123"})
            } else {
                reject('ERROR: something whento wrong')
            }
           },1000)
        })

        promiseFour.then((user)=>{
            console.log(user);
            return user.userid
        }).then((userid)=>{
            console.log(userid);
            
        }).catch(function(err){
            console.log(err);
            
        }).finally(function (){
            console.log("promde is iether resolve or reject ");
            
        })


//async await kewords focuse line 89

        const promiseFive= new Promise(
            function (resolve,reject){
               
               setTimeout(function(){
                let error=true;//false
                if (!error) {
                    resolve({userid:"javascriptr",pass:"123"})
                } else {
                    reject('ERROR: js whento wrong')
                }
               },1000)
            })

        async function cosumepromiseFive()  {
         
            try {
                const response = await promiseFive
                console.log(response);
                
            } catch (error) {
                console.log(error);
                
            }
           }
           cosumepromiseFive()

            
        // async function getAllData() {
        //   try {
        //     const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        //     const data = await response.json()
        //     console.log(data);
            
            
        //   } catch (error) {
        //     console.log("E: error",error);
            
        //   }
            
        // }
        // getAllData()


        fetch("https://api.github.com/users/hiteshchoudhary")
        .then((reasponse) => {
            
            return reasponse.json()
        })
        .then((data) => {
            console.log(data);
            
        })
        .catch((error) => {
            console.log("Error:",error);
            
        })