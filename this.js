// Keyword THIS

//Reference to the scope. This can change.

function sayHi() {
    console.log('HI')
    console.log(this);
}
/*
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const {first, last, nickName} = this;
        console.log(`${first} ${last } AKA ${nickName}`)
    }
}*/

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const {first, last, nickName} = this;
        return `${first} ${last } AKA ${nickName}`;
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person`)
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAHAHA!`)
    }
}


// Dont use arrow function => as method

