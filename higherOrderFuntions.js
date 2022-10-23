function add(x,y) {
    return x + y;
}

const subtract = function (x,y) {
    return x - y;
}

function divide(x,y) {
    return x / y;    
}

const multiplide = function (x,y) {
    return x * y;
}

const operation = [add, subtract, divide, multiplide];

for (const func of operation) {
    let result = func(5,6);
    console.log(result)
}

// Calling funtions within an object

const thing = {
    doSomething : add
}