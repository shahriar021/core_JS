
// var simbol = Symbol('i am a simbol');
// var simbol2 = Symbol();

// console.log(simbol);
// console.log(simbol2);

// console.log(simbol === simbol2);

//singleton simbol      

// var simbol = Symbol.for("i am a simbol");
// var simbol2 = Symbol.for("i am a simbol");

// console.log(simbol);
// console.log(simbol2);

// console.log(simbol === simbol2);

var cricket = Symbol.for("cricket");

var sports = {
    name: "cricket",
    [cricket]: "bangladesh"

}

console.log(sports);