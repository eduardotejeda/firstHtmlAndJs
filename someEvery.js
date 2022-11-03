const words = ["dog", "dig", "log", 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3);

const startD = words.every(work => work[0] === "d");

const lastG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
});


const someStartWithD = words.some(word => word[0] === 'd');
const everyStartWithD = words.every(word => word[0] === 'd');

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


const bestRating = books.every(rating => rating.rating > 3.5);

const twoAuthors = books.some(author => author.authors.length === 2);