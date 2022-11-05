const nums = [3,4,5,6,7];

const product = nums.reduce((total, currentVal) =>{
    return total * currentVal;
}); //Multiplica todos los numeros en el arreglo nums almacenado en la variable product

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currVal) => {
    if (currVal > max) return currVal;
    return max;
})