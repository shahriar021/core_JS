
//"use strict" dile accident hbe na.tahole parent er dunia parent er moto r child er dunia child er moto hbe

var x =90;
//parent er dunia
//er variable child er dunia te access kora jabe na
function scope(){
    //child er dunia
    //parent ekhane child k shob access dia rakhse
    //child caile parent er kisu access korte parbe and change korte parbe but parent child er kisu access korte parbe na
    var x =100;
    //var dile bar bar notun variable create kore
    //var hocche function scope 
    //var na likhle global scope (change ) hoye jabe
    console.log(`this is from outer ${x}`);
}

scope();
console.log(x)
