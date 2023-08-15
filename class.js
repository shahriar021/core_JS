// var f = function Man(){};

// Object.prototype.shahriar = function(){
//     console.log("hey 'im' a buit in function");
// }

// var p = {};

// p.shahriar();
// //this was a built in function
// // so we know how to make a built in function











class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating!`);
  }

  static isFuntion(a,b){
    return a.age === b.age ? "same" : "not same";
  }

//   get setName() {
//     return this.name;
//   }

//   set setName(name){
//     this.name = name;
//   }
}


// class Cricketer extends Person{
//     constructor(name,age,type,country){
//         super(name,age)
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play(){
//         console.log(`${this.name} is playing`)
//     }
// }





let sakib = new Person("shakibaaaa",35);
let tamim = new Person("tamim",25);


console.log(Person.isFuntion(sakib,tamim));
