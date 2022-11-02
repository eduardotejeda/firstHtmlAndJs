const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1); //Create array of numeros impares
const evens = nums.filter(n => n % 2 === 0); // Crea un arreglo de numero pares 

const bigNums = nums.filter(n => n > 50); //Crea una lista de numero mayores a 50


const books = [
    {
        title:'Good Omes',
        authors:['Terry Pratchett','Neil Gaiman'],
        rating:4.25,
        genres: ['fantasy', 'epic', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors:['Jeff Smith'],
        rating:4.11,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'American Gods',
        authors:['Neil G aiman'],
        rating:4.42,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'A Gentleman in Moscow',
        authors:['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'short stories']
    }
    ]

const shortForm = books.filter(book => (
    book.genres.includes('short stories') || book.genres.includes('essays')
)) // Filtra libros de una lista de objetos por categoria

const goodBooks = books.filter(b => b.rating > 4.20) // Filtra libros con rating mayor a 4.20

const query = 'The';
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
})