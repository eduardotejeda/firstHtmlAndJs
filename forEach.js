const numbers = [20,21,22,23,24,25,26,27,28,29];

//Call a function for each element

//numbers.forEach(function(n) {
 //   console.log(n * 2);
//})



//function printTriple(num) {
 //   console.log(num *3);   
//}
//numbers.forEach(printTriple);


// forEach also gives index
numbers.forEach(function(num, idx) {
    console.log(idx, num)
})


//Objects arrays and forEach

const books = [
{
    title:'Good Omes',
    authors:['Terry Pratchett','Neil Gaiman'],
    rating:4.25
},
{
    title: 'Bone: The Complete Edition',
    authors:['Jeff Smith'],
    rating:4.11
},
{
title: 'American Gods',
authors:['Neil Gaiman'],
rating:4.42
},
{
    title: 'A Gentleman in Moscow',
    authors:['Amor Towles'],
    rating: 4.36
}
]

books.forEach(function(book){
console.log(book.title.toUpperCase())}
)