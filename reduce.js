const nums = [3,4,5,6,7];

const product = nums.reduce((total, currentVal) =>{
    return total * currentVal;
}); //Multiplica todos los numeros en el arreglo nums almacenado en la variable product

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currVal) => {
    if (currVal > max) return currVal;
    return max;
})

const nums2 = [10,20, 30, 40, 50].reduce((sum, num) => {
    return sum + num;
}, 100) //.reduce tiene la opcion de iniciar con un numero difirente agregando despues del }, numero.

//Tallying or frecuency counter to make objects

const votes = ['y', 'y', 'n', 'y', 'absent', 'n', 'y','y','n','n'];

const results = votes.reduce((tally, val) => {
if (tally[val]) {
    tally[val]++
} else {
    tally[val] =1;
}
return tally;
}, {})

 
const results2 = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {}); 