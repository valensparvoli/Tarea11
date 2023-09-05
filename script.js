//Actividad 1

var topping;
var precio;
var precioFinal;
var helado = 10;

if(topping == "Oreo"){
    precio=10;
    precioFinal=precio+helado;
    console.log("El helado cuesta $" + precioFinal)
}else if (topping=="KitKat"){
    precio=15;
    precioFinal=precio+helado;
    console.log("El helado cuesta $" + precioFinal)
}else if (topping== "Kinder"){
    precio=25;
    precioFinal=precio+helado;
    console.log("El helado cuesta $" + precioFinal)
}else{
    console.log("No tenemos ese topping")
}


//Actividad 2

let menu;

menu="Verdura";

switch (menu){
    case menu = "Carne":
        console.log("La bebida es vino tinto");
        break;
    case menu = "Pescado":
        console.log("La bebida es vino blanco");
        break;
    case menu = "Verdura":
        console.log("La bebida es agua");
}

//Actividad 3

var numeros = [1,2,3,4,5];

for(let i = 0; i<numeros.length; i++){
    if(i<6){
        numeros.push(6);
        console.log(numeros);
    }
}

//Actividad 4

var num = 0;
while(num<11){
    num++;
    console.log(num);
    console.log("Numero menor a 11")
}

