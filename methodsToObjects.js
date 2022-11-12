/*Adding Methods to Objects*/

//We can add fuctions as properties on objects. Nice organization structure.

const math = {
    numbers: [1,2,3,4,5],
    add: function (x,y) {
        return x + y;
    },
    multiply: function (x,y) {
        return x * y;
    }
}

//Shorthand, new way

const auth = {
    /* username : 'TommyBot',
    login: () => {
        console.log()
    }, */
    login() {
        console.log("LOGGED YOU IN!")
    },
    logout(){
        console.log("GOODBYE")
    }
}