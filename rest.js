//Argumentos infinitos en una fucion

//The arguments object, using it is very... Meh. Dont work in => function

function sumAll(){
    let total = 0;
    for (let i=0; i < arguments.length; i++)
{    total += arguments[i];
}
return total;
}

//sumAll(8,4,3,2); 17
//sumAll(2,3); 5


function sum() {
    console.log(arguments);
}

// Rest parameters

function sumAllRest(...nums){
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

//sumAllRest(1,2); //3
//sumAllRest(1,2,3,4,5); 15

function sum(... nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

function sum2(... nums) {
    return nums
}

//Collect remaining arguments that dont have a parameter

 function fullName(first, last, ...titles){
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
 }

 const multiply = (...nums) => (
    nums.reduce((total, currVall) => total * currVall)
 )