function confirmaAno(year) {
    return function(x,y){
        return year >= x && year <= y;
    }
    
}

const anodeano = confirmaAno(1912);
//const years =  function(x,y);

 