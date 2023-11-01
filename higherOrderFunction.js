//higher order function

// function hello(){

//     console.log("ekhono ami vitore jai ni");
//     return function print(){
//         console.log("ehkon ami print hobo");
//     }

// }


// hello()();

//without higher order function

// var loop1 = function loop (){

//     for(var i=0; i<5; i++){
//         console.log(i*2);
//     }

// }

// loop1();

//with higher order function
// var loop = [1,2,3,4,5,6,7,8,9,10];
// var m=3;
// var result = loop.map((i)=>  i*m);

// console.log(result);

//--------------------------filter--------------------------

var player = [
    {name: "sakib", age: 35},
    {name: "tamim", age: 34},
    {name: "mashrafi", age: 40},
    {name: "mushfiq", age: 33},
    {name: "mahmudullah", age: 35},
    {name: "mustafiz", age: 25},
]

var playerWithGreatAge  = player.filter((i)=> i.age>33);
console.log(playerWithGreatAge);