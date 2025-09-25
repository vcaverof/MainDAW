
//EJEMPLO 1---------------------------------------------
let numero1=1;          console.log(typeof numero1); 
let numero2=1.03;       console.log(typeof numero2);
let boleano=true;       console.log(typeof boleano);
let cadena="Hola";      console.log(typeof cadena);
let nulo=null;          console.log(typeof nulo);
                        console.log(nulo);
let indefinido;         console.log(typeof indefinido);
                        console.log(indefinido);
let objeto={a:1};      console.log(typeof objeto);
//-------------------------------------------------------

//EJEMPLO 2---------------------------------------------
//Ámbito de variables - var
console.log(a);
var a = 1;
{
    console.log(a);
}

(function(){
    console.log(a);
    console.log(b);
    var b = 2;
    console.log(b);
}());
console.log(b);

//Ámbito de variables - let
console.log(a);
let a = 1;
{
    console.log(a);
}

(function(){
    console.log(a);
    console.log(b);
    let b = 2;
    console.log(b);
}());
console.log(b);
//-------------------------------------------------------



