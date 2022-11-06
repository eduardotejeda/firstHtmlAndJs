//function confirmaAno(year) {
 //   return function(x,y){
 //       return year >= x && year <= y;
 //   }
    
//}

//const anodeano = confirmaAno(1912);
//const years =  function(x,y);

function doble(x) {
    return function(num) {
        return x * num;
    }
}

const duplicar = doble(2)

///////////////

function yearToCheck(year) {
    return function (x, y) {
        return year >= x && year <= y;
    }
   
}

const checkYears = yearToCheck(1912);

const isChild = yearToCheck(14);

const isNiceWeather = yearToCheck(23);

///////

function checkTolerance(a,b) {
    return function(cifra) {
        return cifra >= a && cifra <= b;
    }
}

const checkTemp = checkTolerance(80,196);
const checkAge = checkTolerance(18,67);
const checkWeather = checkTolerance(15,26);


let textTest = function(text) {
    return text;
}

