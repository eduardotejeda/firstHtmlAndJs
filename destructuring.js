// Destructuring clean way of unpack values from arrays and properties from objects into distinct variables.

//Destructurin arrays

const raceResults = [
    'Eiud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

//Old way

//const gold = raceResults[0]
//const silver = raceResults[1]
//const bronze = raceResults[2]

//New way

const [gold, silver, bronze] = raceResults;
//const [first, , , fourth] = raceResults;
//const [winner, ...others] = raceResults;

/* Object destructuring */

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

const {first, last, ...others} = runner;


/*Make new variable base on propertie name*/
const {country: nation, title: honorific} = runner



/* Nested Destructuring */

const results = [{
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
},
{
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
},
{
    first:'Galen',
    last: 'Rupp',
    country:'Unided States'
}
]

const [{first: goldWinner},{country}] = results


//Better for nested do in it this way
const [,silverMedal] = results;
const {country} = silverMedal;