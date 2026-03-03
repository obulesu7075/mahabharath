//normal function
 function treet(){
    console.log("Hello ! javascript")
 }
 treet();

 //function expression
 //here the function is stored in the varible we did not call before intialization
 let syaHello = function() {

console.log("hello my friends");
 };
  syaHello();

  //intialization of the arrow function 
  //its an shorter way to intialize the function
   add = (a,b) => {
     console.log(a+b);
 console.log("the sum of two numbers is calculated");
 console.log("its an very intrested function to use");
 console.log("when we had single parameter no need to mention the parathesis");
   };
   add(10,20);

   //Anonymous function 
   // its an function with any name

   setTimeout(function(){
    console.log("this block of code executed after 5 seconds");
   },5000);

   //nested function on js 
   //a function calls inside the another function

   function outside(){
    console.log("its an  the outside block");
     function inner(){
        console.log("inner side of block");
     }
     inner();
   }
   outside();