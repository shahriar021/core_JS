// if(1){
//     var varVariable = "this is varVariable";
//     //function scope
// }

// console.log(varVariable); // this is varVariable

// if(1){
//     let letVariable = "this is letVariable";
//     //block scope
// }

// console.log(letVariable); // ReferenceError: letVariable is not defined
// //let is not working because it is block scope and it is not working outside of the block

// //difference between var and let is that var is function scope and let is block scope 

var varVariable = "this is varVariable";
console.log(varVariable); // this is varVariable
if(1){
    var varVariable = "this is varVariable 2";
    //function scope
}

console.log(varVariable); // this is varVariable

 if(1){
     let letVariable = "this is letVariable";
    //block scope
console.log(letVariable); 
 }

// console.log(letVariable); 

//in const var we cant redefine the variable and reassign the variable-----------------------
//but in let we can reassign the variable but cant redefine the variable------------
//but in var we can redefine the variable and reassign the variable-----------------------

