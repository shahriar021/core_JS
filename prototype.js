//this is child

// function Person(name,age)  {
//         let person = Object.create(Person.prototype);
//         person.name = name;
//         person.age = age;
//         return person;
// }
// //this is parent
//  Person.prototype={
     
//     eat(){
//         console.log(`${this.name} is eating`)
//     },

//     sleep(){
//         console.log(`${this.name} is sleeping`)
//     }

     
// }

// const p1 = Person('bob',22)
// p1.eat();
// const p2 = Person('alice',26)
// p2.sleep();





//-----------------

//  const cars = 
//  {
//     name: 'BMW',
//     model: 'X5',
//     year: 2019,
//  }



//  const bmwi3 = Object.create(cars);

//  bmwi3.model='i3';
//     bmwi3.year=2022;

//  console.log(bmwi3.model, bmwi3.year);

 //this happens because of prototypal inheritance   nm 


 //benifit of using new keyword is that it will create a new object and will not change the parent object,don't need to use object.create
// class Person {
//   constructor(name, age) {
//     //let person = Object.create(Person.prototype);
//     this.name = name;
//     this.age = age;
//     //return person;
//   }
//   //this is parent

//   eat() {
//     console.log(`person is eating`);
//   }

//   sleep() {
//     console.log(`Person is sleeping`);
//   }
// }

// const p1 = new Person("bob", 22);
// p1.eat();
// const p2 = new Person("alice", 26);
// p2.sleep();



// let personxs = new Array();

// personxs.push("bobo");
// console.dir(personxs)




