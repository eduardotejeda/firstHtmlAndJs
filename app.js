let respuesta = "3";

if (respuesta === 1) {
    console.log("It's true!");
}
else if (respuesta <= 1) {
    console.log("It's false!");
}
else {
    console.log("Invalid response.");
}


let age = 24;
let gender = "male";
if (age >= 18 && gender === "male"){
    console.log("Can enter the competition");
}
else {
    console.log("Can't enter the competition");
}


let helado = "Uva";
if(!(helado === "fresa" && helado === "vainilla")){
    console.log("NO TENEMOS ESE SABOR!")
}


let color = 'red';

switch(color){
    case 'blue':
    case 'yellow':
        console.log('color primario');
        break;
    case 'red':
        console.log('color secundario');
        break;
}

//Arrays

let colors = ["blue", "red", "yellow", "silver", "black"];

colors[colors.length-1]