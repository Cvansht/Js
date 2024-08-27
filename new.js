// topic function

// function sum (a ,b) {
//     console.log(a+b)
// }
// sum(3,5)

// function nice(naam) {
//     console.log("Hey" + naam + "you are nice ")
//     console.log("Hey" + naam + "you are good ")
//     console.log("Hey" + naam + "your hair is nice ")
//     console.log("Hey" + naam + "you are smart")

// }

// nice("shivansh")

// function sum(a ,b ) {
//     return a +b

// }
// result1 = sum(3,5)
// result2 = sum(3,4)
// result3 = sum(3,9)

// console.log("the result of the sum is "  +result1)
// console.log("the result of the sum is "  +result2)
// console.log("the result of the sum is "  +result3)

// This is a string tutorial

// template literals using $ sign to asssign varible

// slice ---- using "b.slice(!,5)"

// faulty calculator

// let random = Math.random()
// let a = prompt("Enter the  first number")
// let b =   prompt("Enter the  second number")
// let c = prompt("Specify the operation")

// let obj ={
//     "+":"-",
//     "*":"+",
//     "-": "/",
//     "/": "**",

// }

// if (random > 0.1){
//     //perform correct calc
//     alert('the result is  ${eval('${a} ${c} ${b}')}')

// }
// else{
//     // perform wrong calcualtion
//     c =obj[c]
//     alert('the result is  ${eval('${a} ${c} ${b}')}')
// }

// EXCERCISE 2: BUSINESS NAME GENERATOR

// Create a business name generator by combining list of adjectives, shop name and another word

// adjectives :
// crazy
// amazing
// fire

// shop name :
// engine
// food
// garments

// Another word
// Bros
// hub
// limited

// let rand  = Math.random()
// let first ,second, third ;

// if(rand < 0.33){
//     first ="crazy"
// }
// else if(rand <0.66 && rand >= 0.33){
//     first ="amazing "
// }
// else{
//     first ="fire"
// }

// // second word generate

// if(rand <0.33){
//     second ="engine"
// }
// else if(rand <0.66 && rand >= 0.33){
//     second ="food"
// }
// else{
//     second ="garments"
// }

// // third word generate

// if(rand <0.33){
//     third ="bros"
// }
// else if(rand <0.66 && rand >= 0.33){
//     third ="hub"
// }
// else{
//     third ="limited"
// }

// console.log( ${first}  ${second}  ${third})  ***we have a  problem here*****

// now we have to choose the word randomly

// ******* PROPERTY ARRAY ********

// 1.we change the value of the array elements  by using arr[position] = value but not possible in string.

//  let arr = [ 1 ,2 ,3 ,4 ,5]
// arr[0] = 5666;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

// 2.We can convert the array into  strings by using below it will display the value in the array in the form of string.
//   console.log(arr.toString())

// 3.We can join the elements in the array using some words by using the below

// console.log(arr.join("or"));

// 4. to return the last value of the array or the popped value we use the below

// console.log(arr.pop());

// 5.We can insert any value or the  number irrespective of the types of value stored in the array using below
// console.log(arr.push("100"));

// 6. To take out the first value of the Array and unshift add numbers int he first place
//  console.log(arr.shift());

//  7. to delete the last Element
//  delete arr[6];

// 8. To concatenate the array we use

// form three array a1 a2 a3 , the concat will not change the orginal array it will  display a new array

// a1.concat(a2 , a3)

// 9.To change the value of array elements using "map "

// let newarr = arr.map((e)=>{
//     return e**2
// }

// )
// console.log(newarr)
// // filter function
// const greaterthanseven =(e)=>{
//     if(e>7){
//         return true
//     }

//     return false
// }
// console.log(newarr.filter(greaterthanseven))

// let arr2 =[1,2,3,4,5]
// const red  =  (a,b)=>{ /*in this line we defined a function named red*/
//     return a*b
// }
// console.log(arr2.reduce(red))
// The reduce funnction will reduce the entire array into a single value

// *****   EXCERCISE 3 ******

// WRITE A PROGRAM TO CALCULATE THE FACTORIAL OF NUMBER USING REDUCE AND FOR LOOPS  ........

// let num = prompt("Enter the Number")

// for ( i = num; i>=1; i--) {
//    a=[i]
//     console.log(a)
//      }

// ***** SHORT METHOD *****
// let a = 6;

// function factorial(number) {
//   let arr = Array.from(Array(number + 1).keys());
//   console.log(arr.slice(1));
//   let c = arr.slice(1).reduce((a, b) => {
//     return a * b;
//   });
//   console.log(c)
// }

// factorial(a);

//   ******Document Object Model in js*****

// document.title ="Harry is good"
// console.log(document.title)
// console.log(document.body)

// console.log("hello world");
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";

// document.getElementById("fake").style.backgroundColor="red";

// ******EXCERCISE******

//  QUES. Given 5 boxes assign a random color and random background to the boxes using dom concepts.

// Various DOM related properties

// QUES. Dyanmic website builder

// Events, Event Bubbling, setInterval & setTimeout

// let button =document.getElementById("btn")
// button.addEventListener("dblclick" ,() =>{
//   document.querySelector(".box").innerHTML="<b> Hi Shivansh</b>"
// })

// *****EVENT BUBBLING AND PROPOGATION******

// document.querySelector(".child").addEventListener(
//   "click" ,(e)=>{
//     e.stopPropagation()
//     alert("Child was clicked")
//   }
// )

// document.querySelector(".childcontainer").addEventListener(
//   "click" ,()=>{
//     alert("Child-container was clicked")
//   }
// )
// document.querySelector(".container").addEventListener(
//   "click" ,()=>{
//     alert("container was clicked")
//   }
// )

// setInterval(() =>{
//   document.querySelector(".childcontainer").style.background ="green"
// },1000);

// ****Callbacks & Promises ******
// Asynchronous nature of javascript :

// console.log("This is promises")

// let prom1 =new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         console.log("Yes I am done")
//         resolve("Shivansh")
//     } ,3000);
// })
// prom1.then((a)=>{
//     console.log(a)
// })

// Async / Awaits function

// async function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }
// console.log("Loading modules");
// console.log("Do something else");
// console.log("Load data");

// let data = getdata();
// if we want that the function stops here as long as  the promise is not fulfilled we will use the async awaits functionality of  javascript other way  is to use data.then (callback based approach) as follows

// data.then((v)=>{console.log(data)

//     console.log("Process data")

//     console.log("task2")

// })

// *****Approach 2*****

// using asyn function as it runs in the background while our rest of the code executes:: async function getdata()
// But if we want to wait for the function to exceute we will use to do this we have to make an async main function so that we can wrap the entire code within it...

// async function main(){

// It simulates getting data from a server

// console.log("Loading modules");
// console.log("Do something else");
// console.log("Load data");

// let data = await getdata()

// console.log(data);
// console.log("Process data");
// console.log("task2");

// }
// main()

// *** FETCH API ***
// the below overall function acts as a promise
// async function getdata() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   // It will return promise
//   // .then(response => response.json())
//   // .then(json => console.log(json))
//   let data = await x.json();
//   console.log(data);
//   return 455;
// }
// async function main() {
//   // It simulates getting data from a server

//   console.log("Loading modules");
//   console.log("Do something else");
//   console.log("Load data");

//   let data = await getdata();

//   console.log(data);
//   console.log("Process data");
//   console.log("task2");
// }
// main();

//  NOTE
//  settle means resolve or reject
//  resolve means promise has settled succesfully
//  resolve means promise has not settled succesfully

// ****Try catch & Error Handling*****

// let a = prompt("enter the  first number");
// let b = prompt("enter the  second number");

// let sum = parseInt(a) + parseInt(b);
// parseint convert the string into number if we input string it will show  not a number(nan) in the output
// this is the forgiving nature of js but if we want that the output to show error we use the  error function as following :

// if (isNaN(a) || isNaN(b)) {
//   throw SyntaxError("sorry this is not allowed");
// }

// console.log("the sum is  " ,sum)

// Now if there is error arises from your application like we use x without defining it it will show error , so there is procedure to handle the error using 'trycatch' the given syntax tries the error one more time if it doesnt resolve it will show the output using catch:

// try {
//   console.log("the sum is  ", sum * x);
// } catch (error) {
//   console.log("error aa gaya bhaiyaji");
// } finally {
//   console.log("padh le bhai");
// }
// if we put the above syntax in the function main and  put a return value it will not run the below function console.log("padh le bhai") if it was not enclosed in the finally bracket .

//***** Object oriented programming nature of javascript classes and object*****

// class animal{
//   constructor(name){
//     this.name =name
//     console.log("object is created")
//   }
//   eats(){
//     console.log("kha rha hoon")
//   }
//   jumps(){
//     console.log("kood rha hoon bhai")
//   }
// }
// class lion extends animal{
// // The keyword 'extends animal' is used to  bring the property of class animals innto the new class lion other way is to copy the entire class objects  into the lion class now we can also define some new objects.


// }

// let a=new animal("bunny hu mai")
// console.log(a)

// let l =new lion ("sheraaaa")
// console.log(l)

// **** ADVANCED JAVASCRIPT *****

// async function sleep(){
//   return new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//       resolve(45)
//     } ,1000)
//   })

// }
// //  IIFE (Immediatelty invoked function expression)
// (async function main(){
//   let a = await sleep()
//   let b = await sleep()
// })()

// DESTRUCTURING
// let [x ,y]=[1,5]
// console.log(x,y)
// the above will assign x as 1 and y as 5 but if we do let [x ,y]=[1,5 ,7] it will not take  in account 7  

// if we want to put numbers that are put beyond 5 into a new array we will use "...rest"
// let [x ,y, ...rest]=[1,5,7,8,9,10]
// console.log(x,y ,rest)


// similarly we can  do it for the objects

// let obj={
//   a: 1,
//   b: 2,
//   c: 3,
// }

// let{a,b}  =obj
// console.log(a,b)

// ***learning React***
// we can use states which means that in a update the state  variable it changes across the page