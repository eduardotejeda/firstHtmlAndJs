//Spread in a function call

const max = Math.max(2,3,45,55,77,99,2,45,67);
const min = Math.min(2,3,45,55,77,99,2,45,67);

const nums = [45,23,33,7,5]

Math.max(nums)
NaN
Math.max(...nums)
45

function giveMeFour (a,b,c,d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']
const str = 'GOAT'

//Spread in array literal. Copy or combine array

const cephalopods = ['dumbo octubus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana lug', 'variable neon lug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [... cephalopods, ...gastropods]

const inverts = [... cnidaria, ... gastropods, ... cephalopods]

const cephCopy = [...cephalopods];


// Other way

const combine = cephalopods.concat(gastropods);

// 'abcdeg'.split('')
// [...abcdeg]

//Spread in object literal

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

//Copy propietis from object

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

const catDog = {
    ...canine,
    ...feline
}

const tripod = {
    legs: 3,
    ...canine
}

const catDogClone = {
    ...catDog
}

//spread array or str into object

const arrayObject = {...[4,5,5]}
const strObject = {...'mangu'}

const random = [...'hello', {...catDog}]