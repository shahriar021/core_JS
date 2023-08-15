//implicit binding
//explicit binding
//new binding
//window binding


 //implicit

//  var sakib = {
//     name: 'sakib',
//     age: 35,

//     printName:function(){
//         console.log(this.name);
//     }
//  }

//  sakib.printName();

// --------

//  var Person = function (name,age){
//     return {
//         name: name,
//         age: age,

//         printName: function(){
//             console.log(this.name);
//         },

//     }
//  }

//  var shakib = Person("shakib",40);
//  shakib.printName();

 //rule of implicit bindint is  first : 


 //--------------------------------------------------explicit---------------------------------------------
//  var printName = function (v1,v2,v3){
//     console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
//  };

//  var sakib = {
//     name:"shabkib",
//     age:70
//  };

//  var v1 = "Handsome";
//  var v2 = "all rounder";
//  var v3 = "wc winner";

//  var v = [v1,v2,v3];

// //  printName.call(sakib,v1,v2,v3);///.call ekta ekta kore ney

// var newFunc = printName.bind(sakib,v)//bind eksate onk gula ney

// newFunc();

//----------------------------------------------new binding------------------------------------------------

// function Person(name,age){
//     this.name = name;
//     this.age=age;

//     console.log(`${name} is ${age} old!`)
// }

// var sakib = new Person("shahriar",70);

// console.log(sakib)


//-----------------------------------------------window bindin------------------------------------------------



var printName = function(){
    console.log(this.name);
}

