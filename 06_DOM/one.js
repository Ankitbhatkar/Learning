// // All DOM Selectors

// // 01 August 2024
// // 10:50

// // 1 document.getElementById():


// This function is use for selecting the element by give the name of id

// Ex: document.getElementById("name of id")


// document.getElementById('title')
// ->  <h1 id=​"title" class=​"heading">​…​</h1>​
// document.getElementById('title').id
// ->   'title'
// document.getElementById('title').class
// -> undefined
// document.getElementById('title').className
// ->  'heading'







// const myelement= document.getElementById("title")
// undefined
// myelement.style.backgraundcolor="red"
// 'red'



// document.getElementById('title').getAttribute("id")
// ->  'title'
// document.getElementById('title').getAttribute("class")
// ->  'heading'

// title.style.backgraundcolor='blue'
// 'blue'
// title.style.color='blue'
// 'blue'
// title.style.padding='15px'
// '15px'
// title.style.backgraundcolor='white'
// 'white'
// title.style.backgraundcolor='white'
// 'white'
//  ==============================================================interesting========================================================== 

// title.textContent
// 'DOM learning on Chai aur code test text'
// title.innerText
// 'DOM learning on Chai aur code'
// title.innerHTML
// 'DOM learning on Chai aur code <span style="display: none;">test text</span>'
// ========================================================================================================================================
// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​
// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector('input[type="password"]')
// <input type=​"password" name id>​
// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​


// let myul=document.querySelector('ul')
//  undefined
// let myli=myul.querySelector('li')
// undefined
// myli.style.color="red"
// 'red'


// const TempLilist=document.querySelectorAll("li")
// undefined
// TempLilist.style.color="red"
// TempLilist.style.color="red"
// VM501:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at eval (eval at <anonymous> (one.html:1:23), <anonymous>:1:23)
//     at <anonymous>:1:23
// eval @ VM501:1
// (anonymous) @ VM495:1Understand this error
// TempLilist[0].style.color="red"
// 'red'



//  const TempLilist=document.querySelectorAll("li")
// undefined
// TempLilist.forEach(function(l){
//     l.style.color="green"})
// undefined


// const TempClasslist=document.querySelectorAll(".list-item")
// undefined
// TempClasslist.forEach(function(item){
// console.log(item);
// })
// VM837:2 <li class=​"list-item" style=​"color:​ green;​">​…​</li>​
// VM837:2 <li class=​"list-item" style=​"color:​ green;​">​…​</li>​
// VM837:2 <li class=​"list-item" style=​"color:​ green;​">​…​</li>​
// VM837:2 <li class=​"list-item" style=​"color:​ green;​">​…​</li>​
// undefined


// const allH2=document.querySelectorAll("h2");
// undefined
// allH2[3].innerText
// 'Website client-side usage'