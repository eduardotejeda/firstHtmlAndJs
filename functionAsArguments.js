function callThreeTimes(f){
    f();
    f();
    f();
}

function sad(){
    console.log('BOO HOO I\'M SO SAD');
}

function happy() {
    console.log('IT\'S A GREAT DAY!');
}

function ran(x, y) {
    let rando = Math.random();

    if (rando < 0.5) {
        x();
    } else {
        y();
    }
}

function frecuency(x, num){
    for (let index = 0; index < num; index++) {
        
        x();
        
    }
}