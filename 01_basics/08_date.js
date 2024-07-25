// Date=======

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let mycreatedDate= new Date(2003,8,12);
// let mycreatedDate= new Date(2003,8,12,7,30);
// let mycreatedDate= new Date("2003-01-14");
let mycreatedDate= new Date("01-14-2003");
// console.log(mycreatedDate.toLocaleString());
 

let mytimeStamp =Date.now()
// console.log(mytimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/100)); //convert int seconds



let newdate = new Date();
console.log(newdate.toString());
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
 newdate.toLocaleString('defoult',{
    weekday:"long"
 })
