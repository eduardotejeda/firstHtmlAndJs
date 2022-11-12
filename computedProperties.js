/*Computed Properties*/

//Improvement of object literals by adding a dinamic key.

const role = 'host';
const person = 'Joos Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

/*

Old way

const team = {
    //role : person
}

team[role] = person;
team[role2] = person2;
*/

const team = {
[role]: person,
[role2]: person2,
[1 + 6 + 9]: 'sixteen'

}


/*Funcion that add properties to an object dinamicly*/

//Old Way 

/*
function addProp(obj, k, v) {
    const copy = {
        ...obj
    };
    copy[k] = v;
    return copy
}
*/

//New way

const addProp = (obj, k, v) => {
    return {...obj, [k] : v
    }
}

const res = addProp(team, 'happy', ':)')