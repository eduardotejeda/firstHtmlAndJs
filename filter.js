const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n > 50);


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
        authors:['Neil Gaiman'],
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
))