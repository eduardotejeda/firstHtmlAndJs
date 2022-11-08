//Function defatult parameters

//Old ways

//function multiply(x,y){
//    if(typeof y === 'undefined') { y =1 }
//    return x*y;
//}

//function multiply(x,y){
//    y == typeof y === 'undefined' ? 1 : y
//    return x*y;
//}

//New way


function multiply(x, y = 1) {
    return x*y;
}

const greet = (person, greet = 'hi') =>{
    console.log(`${greet}, ${person}!`)
}