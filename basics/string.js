let name="ankit";
let repocount=50;
 
console.log( "hello my name is " +name+ " no of repo is"+repocount); //This is not good practice

console.log(`hello my name is ${name} no of repo is ${repocount}`); //This is  good 

let gamename = new String('ankitcode'); //another way to declare strings

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('k'));
const newString = gamename.substring(0,4);
console.log(newString);
const anotherString = gamename.slice(-8,4);
console.log(anotherString);

const StringOne = "  bhatkars  ";
console.log(StringOne);
console.log(StringOne.trim());


const url="http://ankit.com//login%20page"
console.log(url.replace('%20','-'));
console.log(url.includes('ankit'));
console.log(url.includes('bhat'));

console.log(gamename.split(" "));


