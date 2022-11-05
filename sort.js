const prices = [400.50, 3000, 99.99, 35,99, 12.00, 9500];

const ascSort = prices.slice().sort((a, b) => a - b);  //Organiza de menor a mayor.

// No pueden estar las dos, pues ambas mutan el arreglo dentro de la variable prices. Se usa .slice() para hacer una copia del arreglo.
const descSort = prices.sort((x, y) => y - x); // Organiza de mayor a menor.

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

const goodBook = books.slice().sort((a, b) => a.rating- b.rating); // Organiza usando numeros en books.rating. Recordar que .sort muta lo que organiza.