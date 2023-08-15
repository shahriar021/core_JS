   //shadharanoto closure hocche ekta function er moddhe arekta function thakbe and inner function ta o
   //uter function er kono variable access korte parbe but outer function er kono variable inner function er access korte parbe na
//closure is just a function with remembered values 
// ------------------------------------------------------------------------------------------------------------------------   
   
//    var num = 3;
 
//    var sum = function(){
//     var num2= 7;
//     return function(){
//         return num + num2;
//     };
// };

// var myFunc = sum();
// console.dir(myFunc);

// ------------------------------------------------------------------------------------------------------------------------

// function bankAccount(initial){
//     var balance = initial;
//     return function(){
//         return balance;
//     }
// }

// var account = bankAccount(100000);
// console.dir(account); 

//--------------------------------------------------------------------------------------------------------------------------

// var num1 = 10;
// var num3 = 20;

// var sum = function(){

//     var num2 = 20;
//     return num1 + num2;
    
// };

// console.dir(sum);

//==========================================================================================================================

//let and var er jonne closure e difference value ashbe
//let hocche block scope and var hocche function scope so let 




// function stopWatch(){
//     var startTime = Date.now();

//     function getDelay(){
//         console.log(Date.now() - startTime);
//     }

//     return getDelay;
// }

// var timer = stopWatch();

// for(var i = 0; i < 100000000; i++){
//     var a = Math.random() * 1000000;
// }

// timer();
// timer();
// console.dir(timer);

// //what about garbage collection??

// timer=null;

//--------------------------------------------------------------------------------------------------------------------------

// function async(){
//     var a =10;

//     setTimeout(function(){
//         console.log(a);
//     },3000)
// };

// async();
//--------------------------------------------------------------------------------------------------------------------------

// function apiFunction(url){
//     fetch(url)
//     .then((res)=>{
//         console.log(res);
//     })
// }

// apiFunction("https://jsonplaceholder.typicode.com/todos/1");

//--------------------------------------------------------------------------------------------------------------------------


for(var  i =0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },3000)
    
}